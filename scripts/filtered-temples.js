// Add footer information: Copyright year and last modified date
const footerElement = document.querySelector('footer p');
const lastModified = document.querySelector('footer p:last-child');
const currentYear = new Date().getFullYear();

footerElement.innerHTML = `&copy; ${currentYear} Nefi Muniz dos Santos - Brazil`;
lastModified.innerHTML = `Last updated: ${document.lastModified}`;

// Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menu');
    const navList = document.querySelector('nav ul');

    menuButton.addEventListener("click", function () {
        navList.classList.toggle("show");
        menuButton.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (this.window.innerWidth >= 640) {
            navList.classList.remove("show");
            menuButton.classList.remove("show");
        }
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salvador Brazil",
        location: "Salvador - Bahia, Brazil",
        dedicated: "2024, October, 20",
        area: 29963,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668.jpg"
      },
      {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30- November, 2",
        area: 59246,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-7654.jpg"
      },
      {
        templeName: "Campinas Brazil",
        location: "Campinas - São Paulo, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"
      },
];

// Create temple cards
function displayTemples(temples) {
    // where temple will be displayed
    const templeGrid = document.querySelector('.temples-grid');
    templeGrid.innerHTML = "";

    temples.forEach(temple => {
        // Create a figure element
        const figure = document.createElement('figure');

        // Create and append an image element with lazy loading
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName}`;
        img.loading = "lazy";
        figure.appendChild(img);

        // Create and append a caption and the figure
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area}</p>
        `;
        figure.appendChild(figcaption);
        templeGrid.appendChild(figure);
    });
}

function filterTemples(option) {
    let filteredTemples = temples;

    switch (option) {
        case "old":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area >90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

document.getElementById("home").addEventListener("click", () => filterTemples("home"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

// Call the function and pass the array of temples
displayTemples(temples);

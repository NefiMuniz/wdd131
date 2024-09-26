// Add footer information: Copyright year and last modified date
const footerElement = document.querySelector('footer p');
const lastModified = document.querySelector('footer p:last-child');
const currentYear = new Date().getFullYear();

footerElement.innerHTML = `&copy; ${currentYear} Nefi Muniz dos Santos - Brazil`;
lastModified.innerHTML = `Last updated: ${document.lastModified}`;

// Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('nav ul');

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (this.window.innerWidth >= 768) {
            nav.classList.remove("show");
        }
    });
});
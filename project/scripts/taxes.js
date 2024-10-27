// Taxes data for each category
const taxesData = {
    large: [
        { name: 'IRPJ', rate: '15%', description: 'Corporate Income Tax' },
        { name: 'CSLL', rate: '9%', description: 'Social Contribution on Net Income' },
        { name: 'PIS', rate: '1.65%', description: 'Social Integration Program' },
        { name: 'COFINS', rate: '7.6%', description: 'Contribution for Financing Social Security' },
        { name: 'ICMS', rate: 'Varies by state', description: 'State Value Added Tax' }
    ],
    medium: [
        { name: 'IRPJ', rate: '15%', description: 'Corporate Income Tax' },
        { name: 'CSLL', rate: '9%', description: 'Social Contribution on Net Income' },
        { name: 'PIS', rate: '0.65%', description: 'Social Integration Program' },
        { name: 'COFINS', rate: '3%', description: 'Contribution for Financing Social Security' },
        { name: 'ICMS', rate: 'Varies by state', description: 'State Value Added Tax' }
    ],
    simple: [
        { name: 'DAS', rate: 'Varies by revenue', description: 'Unified tax regime for small businesses' },
        { name: 'ISS', rate: '2% to 5%', description: 'Municipal Service Tax' },
        { name: 'ICMS', rate: 'Varies by state', description: 'State Value Added Tax' }
    ],
    individual: [
        { name: 'MEI DAS', rate: 'Fixed Value', description: 'Simplified tax regime for individual microentrepreneurs' },
        { name: 'ISS', rate: '2% to 5%', description: 'Municipal Service Tax' },
        { name: 'INSS', rate: '5%', description: 'Social Security Contribution' }
    ]
};

// Function to load taxes based on the selected category
function loadTaxes(category) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';  // Clear previous content

    const taxes = taxesData[category];
    taxes.forEach(tax => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = tax.name;

        const rateCell = document.createElement('td');
        rateCell.textContent = tax.rate;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = tax.description;

        row.appendChild(nameCell);
        row.appendChild(rateCell);
        row.appendChild(descriptionCell);

        tableBody.appendChild(row);
    });
}

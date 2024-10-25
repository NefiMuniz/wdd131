// Fines data for each category
const finesData = {
    large: [
        { obligation: 'DIRF', due: 'Annual (February)', fine: '1% of the revenue per month, min. R$ 500' },
        { obligation: 'DCTF', due: 'Monthly', fine: 'R$ 200 - R$ 500 for late delivery' },
        { obligation: 'ECD', due: 'Annual (May)', fine: '0.02% of revenue per month, max. 20% of revenue' }
    ],
    medium: [
        { obligation: 'SPED Fiscal', due: 'Monthly', fine: 'R$ 500 per month' },
        { obligation: 'GFIP', due: 'Monthly', fine: '2% of salary amount, min. R$ 200' },
        { obligation: 'DIRF', due: 'Annual (February)', fine: 'R$ 200 - R$ 500 for late delivery' }
    ],
    simple: [
        { obligation: 'DASN-SIMEI', due: 'Annual (May)', fine: '2% of revenue, min. R$ 50' },
        { obligation: 'PGDAS-D', due: 'Monthly', fine: 'R$ 50 to R$ 500 for late delivery' },
        { obligation: 'DEFIS', due: 'Annual (March)', fine: '1.5% of revenue' }
    ],
    individual: [
        { obligation: 'MEI DAS', due: 'Monthly', fine: 'R$ 50 for late payment' },
        { obligation: 'INSS', due: 'Monthly', fine: '20% of contribution due' },
        { obligation: 'ISS', due: 'Monthly', fine: '5% of revenue' }
    ]
};

// Function to load fines based on the selected category
function loadFines(category) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';  // Clear previous content

    const fines = finesData[category];
    fines.forEach(fine => {
        const row = document.createElement('tr');

        const obligationCell = document.createElement('td');
        obligationCell.textContent = fine.obligation;

        const dueCell = document.createElement('td');
        dueCell.textContent = fine.due;

        const fineCell = document.createElement('td');
        fineCell.textContent = fine.fine;

        row.appendChild(obligationCell);
        row.appendChild(dueCell);
        row.appendChild(fineCell);

        tableBody.appendChild(row);
    });
}

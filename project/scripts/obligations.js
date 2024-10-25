// Obligations data for each category
const obligationsData = {
    large: [
        { name: 'GFIP (Guia de Recolhimento do FGTS)', area: 'HR', period: 'Monthly', dueDate: '7th of the following month' },
        { name: 'EFD Contribuições', area: 'Accounting', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'DCTF', area: 'Tax Writing', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'DIRF', area: 'Accounting', period: 'Annual', dueDate: '28th of February' },
        { name: 'RAIS', area: 'HR', period: 'Annual', dueDate: '5th of March' }
    ],
    medium: [
        { name: 'Simples Nacional', area: 'Tax Writing', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '7th of the following month' },
        { name: 'DEFIS', area: 'Accounting', period: 'Annual', dueDate: '31st of March' },
        { name: 'EFD Fiscal', area: 'Accounting', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'GFIP', area: 'HR', period: 'Monthly', dueDate: '7th of the following month' }
    ],
    simple: [
        { name: 'PGDAS-D', area: 'Accounting', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '7th of the following month' },
        { name: 'DEFIS', area: 'Accounting', period: 'Annual', dueDate: '31st of March' },
        { name: 'RAIS', area: 'HR', period: 'Annual', dueDate: '5th of March' },
        { name: 'GFIP', area: 'HR', period: 'Monthly', dueDate: '7th of the following month' }
    ],
    individual: [
        { name: 'MEI DAS', area: 'Tax Writing', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '7th of the following month' },
        { name: 'DEFIS', area: 'Accounting', period: 'Annual', dueDate: '31st of March' },
        { name: 'RAIS', area: 'HR', period: 'Annual', dueDate: '5th of March' },
        { name: 'DASN-SIMEI', area: 'Accounting', period: 'Annual', dueDate: '31st of May' }
    ]
};

// Function to load obligations based on the selected category
function loadObligations(category) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';  // Clear previous content

    const obligations = obligationsData[category];
    obligations.forEach(obligation => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = obligation.name;

        const areaCell = document.createElement('td');
        areaCell.textContent = obligation.area;

        const periodCell = document.createElement('td');
        periodCell.textContent = obligation.period;

        const dueDateCell = document.createElement('td');
        dueDateCell.textContent = obligation.dueDate;

        row.appendChild(nameCell);
        row.appendChild(areaCell);
        row.appendChild(periodCell);
        row.appendChild(dueDateCell);

        tableBody.appendChild(row);
    });
}

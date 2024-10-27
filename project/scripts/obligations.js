// Obligations data for each category
const obligationsData = {
    large: [
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'DCTFWeb', area: 'HR/Tax', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'DCTF', area: 'Tax Writing', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'DIRF', area: 'HR', period: 'Annual', dueDate: '28th of February' },
        { name: 'ECD', area: 'Accounting', period: 'Annual', dueDate: '30th of June' }
    ],
    medium: [
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'PIS/COFINS', area: 'Tax Writing', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'EFD ICMS', area: 'Accounting', period: 'Monthly', dueDate: '25th of the 2nd following month' },
        { name: 'Income Report', area: 'HR', period: 'Annual', dueDate: '31th of March' },
        { name: 'ECF', area: 'Accounting', period: 'Annual', dueDate: '31th of July' },
    ],
    simple: [
        { name: 'PGDAS-D', area: 'Tax', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '15th of the following month' },
        { name: 'DEFIS', area: 'Accounting', period: 'Annual', dueDate: '31st of March' }
    ],
    individual: [
        { name: 'MEI DAS', area: 'Tax Writing', period: 'Monthly', dueDate: '20th of the following month' },
        { name: 'E-Social', area: 'HR', period: 'Monthly', dueDate: '15th of the following month' },
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

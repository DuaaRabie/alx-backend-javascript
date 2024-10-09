interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const john: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
};

const jane: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 30,
  location: "London"
};

// Create an array of students
const studentsList: Student[] = [john, jane];

// Function to render a table row
function renderTableRow(student: Student): HTMLTableRowElement {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
  return row;
}

// Create the table
const table = document.createElement('table');
table.border = '1';

// Add header row
const headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
table.appendChild(headerRow);

// Append rows for each student
studentsList.forEach(student => {
  table.appendChild(renderTableRow(student));
});

// Add the table to the page
document.body.appendChild(table);

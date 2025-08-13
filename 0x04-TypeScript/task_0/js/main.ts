interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student= {
    firstName: "Nathan",
    lastName: "Israel",
    age: 22,
    location: "Addis Ababa",
}

const student2: Student = {
  firstName: "Selam",
  lastName: "Tesfaye",
  age: 22,
  location: "Bahir Dar"
};

const studentsList: Student[]= [Student1, student2];

//The table 
const table = document.createElement("table");
const headerRow = table.insertRow();
const header1 = headerRow.insertCell();
header1.textContent = "First Name";
const header2 = headerRow.insertCell();
header2.textContent = "Location";


//Adding each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});


document.body.appendChild(table);
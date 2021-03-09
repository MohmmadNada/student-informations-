'use strict'

let allStudent = [];
let total = 0;

function StudentData(StudentName, eMail, mobileNumber, tuition, Age) {
    this.eMail = eMail;
    this.StudentName = StudentName;
    this.mobileNumber = mobileNumber;
    this.tuition = tuition;
    this.Age = Age;
    allStudent.push(this);
}
let form = document.getElementById('formDiv');
form.addEventListener('submit', newStudent)

function newStudent(event) {
    event.preventDefault();

    let newStudentName = event.target.studentEmail.value.split('@')[0];
    let newStudentEmail = event.target.studentEmail.value;
    let newMobileNumber = event.target.studentMobileNumber.value;
    let newTuition = parseInt(event.target.tuition.value);
    let newStudentAge = getRndInteger(18, 24);
    total += newTuition;
    let newStudentData = new StudentData(newStudentName, newStudentEmail, newMobileNumber, newTuition, newStudentAge);
    let TotalUnder = document.getElementById('totalUnderTable');
    tableData();
    TotalUnder.textContent = `total : ${total}`
    studentNumber++
    settingItem();

}
//random age --------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//---------------------table code ---------- 
let tableContainer = document.getElementById('tableContainer');
let table = document.createElement('table');
tableContainer.appendChild(table);
//------- footer part ----- 
let headerTableRow = document.createElement('tr');
table.appendChild(headerTableRow);
let headerID = document.createElement('th');
headerTableRow.appendChild(headerID);
headerID.textContent = 'ID';
let headerName = document.createElement('th');
headerTableRow.appendChild(headerName);
headerName.textContent = 'NAME';
let headerEmail = document.createElement('th');
headerTableRow.appendChild(headerEmail);
headerEmail.textContent = 'Email';
let headerMobile = document.createElement('th');
headerTableRow.appendChild(headerMobile);
headerMobile.textContent = 'Mobile';
let headerAge = document.createElement('th');
headerTableRow.appendChild(headerAge);
headerAge.textContent = 'Age';
let headerTuition = document.createElement('th');
headerTableRow.appendChild(headerTuition);
headerTuition.textContent = 'Tuition';
// data in the table 
let studentNumber = 1;

function tableData() {



    let TableRowData = document.createElement('tr');
    table.appendChild(TableRowData);
    let StudentID = document.createElement('td');
    TableRowData.appendChild(StudentID);
    StudentID.textContent = studentNumber;
    let nameData = document.createElement('td');
    TableRowData.appendChild(nameData);
    nameData.textContent = allStudent[studentNumber - 1].StudentName;
    let headerEmail = document.createElement('td');
    TableRowData.appendChild(headerEmail);
    headerEmail.textContent = allStudent[studentNumber - 1].eMail;
    let headerMobile = document.createElement('td');
    TableRowData.appendChild(headerMobile);
    headerMobile.textContent = allStudent[studentNumber - 1].mobileNumber;
    let headerAge = document.createElement('td');
    TableRowData.appendChild(headerAge);
    headerAge.textContent = allStudent[studentNumber - 1].Age;
    let headerTuition = document.createElement('td');
    TableRowData.appendChild(headerTuition);
    headerTuition.textContent = allStudent[studentNumber - 1].tuition;


}
let TotalUnder = document.getElementById('totalUnderTable');
TotalUnder.textContent = `total : 0`
    //------ local stoarge part -------- 
function settingItem() {
    let data = JSON.stringify(allStudent);
    localStorage.setItem('localStudentData', data);
}

function gettingItem() {
    let stringObject = localStorage.getItem('localStudentData');
    let normalObject = JSON.parse(stringObject);
    if (normalObject !== null) {
        allStudent = normalObject;
    }
}
gettingItem();
let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let gradeInput = document.getElementById("gradeInput");
let addBtn = document.getElementById("addBtn");
let studentTableBody = document.getElementById("studentTableBody");
let editIndex = null; 

let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStudents(){
    studentTableBody.innerHTML = "";

    students.forEach(function(student,index){
        let row=document.createElement("tr");
        row.innerHTML = "<td>" + student.name +"</td><td>" + student.age + "</td><td>" + student.grade + "</td><td><button class='editBtn'>Edit</button> <button class='deleteBtn'>Delete</button></td>";

        let editBtn = row.querySelector(".editBtn");
        editBtn.addEventListener("click",function(){
            editIndex = index;
            nameInput.value = student.name;
            ageInput.value = student.age;
            gradeInput.value = student.grade;
        });

        let deleteBtn = row.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click",function(){
            students.splice(index,1);
            localStorage.setItem("students", JSON.stringify(students));
            renderStudents();
        });

        studentTableBody.appendChild(row);
    });

}
 
addBtn.addEventListener("click" , function(){
    let name = nameInput.value;
    let age = ageInput.value;
    let grade = gradeInput.value; 

    if(editIndex === null){
        students.push({name: name, age: age, grade: grade});
    } else {
        students[editIndex] = {name: name, age: age, grade: grade};
        editIndex = null;
    }

    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();

    nameInput.value = "";
    ageInput.value = "";
    gradeInput.value = "";

}); 

renderStudents(); 

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function(){
    let searchTerm = searchInput.value.toLowerCase();
    let filteredStudents = students.filter(function(student){
        return student.name.toLowerCase().includes(searchTerm) || student.grade.toLowerCase().includes(searchTerm);
    });
    studentTableBody.innerHTML = "";
    filteredStudents.forEach(function(student,index){
        let row=document.createElement("tr");
        row.innerHTML = "<td>" + student.name +"</td><td>" + student.age + "</td><td>" + student.grade + "</td><td><button class='deleteBtn'>Delete</button></td>";

        let deleteBtn = row.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click",function(){
            students.splice(index,1);
            localStorage.setItem("students", JSON.stringify(students));
            renderStudents();
        });

        studentTableBody.appendChild(row);
    });
});
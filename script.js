let studentJSON = "[]";

let students = JSON.parse(studentJSON);

let form = document.getElementById("studentForm");
let studentList = document.getElementById("studentList");
let jsonData = document.getElementById("jsonData");

function displayStudents() {
    studentList.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        let studentDiv = document.createElement("div");
        studentDiv.className = "student";

        let name = document.createElement("h3");
        name.textContent = student.name;

        let details = document.createElement("p");
        details.textContent =
            "Age: " + student.age +
            " Department: " + student.department +
            " Marks: " + student.marks +
            " City: " + student.city;

        studentDiv.appendChild(name);
        studentDiv.appendChild(details);
        studentList.appendChild(studentDiv);
    }

    jsonData.textContent = JSON.stringify(students, null, 2);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        age: Number(document.getElementById("age").value),
        department: document.getElementById("department").value,
        marks: Number(document.getElementById("marks").value),
        city: document.getElementById("city").value
    };

    students.push(student);

    studentJSON = JSON.stringify(students);

    students = JSON.parse(studentJSON);

    displayStudents();

    form.reset();
});

displayStudents();

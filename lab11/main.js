var taskNameInput = document.getElementById("taskNameInput");
var taskContainer = JSON.parse(localStorage.getItem("taskContainer")) || [];

function addTask() {
    var tasks = taskNameInput.value;
    taskContainer.push(tasks);
    localStorage.setItem("taskContainer", JSON.stringify(taskContainer));
    displayProduct();
    clearForm();
}

function clearForm() {
    taskNameInput.value = "";
}

function displayProduct() {
    var cartoona = "";
    for (var i = 0; i < taskContainer.length; i++) {
        cartoona += `<tr>
            <td>${taskContainer[i]}</td>
            <td><button onclick="markAsDone(${i})" class="update">DONE</button></td>
            <td><button onclick="deleteProduct(${i})" class="delete">DELETE</button></td>
        </tr>`;
    }
    document.getElementById("tablebody").innerHTML = cartoona;
}

function markAsDone(index) {
    var button = document.querySelectorAll('.update')[index];
    var row = button.closest('tr');
    button.style.display = 'none';
    row.classList.add('done-row');
}

function deleteProduct(index) {
    taskContainer.splice(index, 1);
    localStorage.setItem("taskContainer", JSON.stringify(taskContainer));
    displayProduct();
}

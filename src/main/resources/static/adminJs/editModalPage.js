let editModal = document.getElementById('editModal');
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close")[1];

function editModalPage() {
    editModal.style.display = "block";
}

span.onclick = function () {
    editModal.style.display = "none";
}

span1.onclick = function () {
    editModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}

function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
}

const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)
function getInformationAboutUser(user) {
    let form = document.createElement("form")
    let roles = []
    for (let role of user.roles) {
        roles.push(" " + role.roleName.toString().replaceAll('ROLE_', ''))
    }

    form.innerHTML = `
                    <td th:text="${user.id}">user</td>
                    <td th:text="${user.firstName}">user</td>
                    <td th:text="${user.lastName}">user</td>
                    <td th:text="${user.age}">user</td>
                    <td th:text="${user.username()}">user</td>
                    <td th:text="${roles}">user</td>`

    document.getElementById(`modalBody`).append(form);
}
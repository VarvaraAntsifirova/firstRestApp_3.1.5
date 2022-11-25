const url = '/api/admin/generalPage'

async function getAdminGeneralPage() {
    let page = await fetch(url)

    if (page.ok) {
        let listOfUsers = await page.json();
        loadTableData(listOfUsers)
    } else {
        alert(`Error, ${page.status}`);
    }
}

function loadTableData(listOfUsers) {
    const tableBody = document.getElementById('tbody');
    let dataHtml = '';


    for(let user of listOfUsers) {
        let roles = [];
        for (let role of user.roles) {
            roles.push(" " + role.roleName.toString().replaceAll('ROLE_', ''))
        }
        dataHtml += `<tr><td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.username}</td>
            <td>${roles}</td>
            <td>
                <button id="editModalButton" class="btn btn-primary" onclick="editModalPage()">
                    Edit
                </button>
            </td>
            <td>
                <button id="deleteModalButton" class="btn btn-danger" onclick="deleteModalPage()">
                    Delete
                </button>
            </td>
            </tr>`
    }
    tableBody.innerHTML = dataHtml;
}


getAdminGeneralPage();
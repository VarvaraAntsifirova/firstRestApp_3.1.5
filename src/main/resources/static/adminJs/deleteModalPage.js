let span2 = document.getElementsByClassName("close")[2];
let span3 = document.getElementsByClassName("close")[3];

span2.onclick = function () {
    editModal.style.display = "none";
}

span3.onclick = function () {
    editModal.style.display = "none";
}

const idDeleteField = document.getElementById('delete-id');
const fistNameDeleteField = document.getElementById('delete-firstName');
const lastNameDeleteField = document.getElementById('delete-lastName');
const ageDeleteField = document.getElementById('delete-age');
const loginDeleteField = document.getElementById('delete-username');

async function deleteFormFill(id) {
    const userByIdURL = '/api/admin/users/' + id;
    let userResponse = await fetch(userByIdURL);
    if (userResponse.ok) {
        let userJSONData =
            await userResponse.json().then(user => {
                idDeleteField.value = `${user.id}`;
                fistNameDeleteField.value = `${user.firstName}`;
                lastNameDeleteField.value = `${user.lastName}`;
                ageDeleteField.value = `${user.age}`;
                loginDeleteField.value = `${user.username}`;

            })

    } else {
        alert(`HTTP Error, ${userResponse.status}`)
    }
}

async function deleteUser() {
    let url = '/api/admin/users/' + idDeleteField.value + '/delete'

    let method = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    }

    await fetch(url, method).then(() => {
        $('#closeBtn').click();
        getAdminGeneralPage();
    })
}

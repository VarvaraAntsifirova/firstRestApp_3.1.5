const id_del = document.getElementById('id_del');
const fistName = document.getElementById('First name_del');
const lastName = document.getElementById('Last name_del');
const age = document.getElementById('age_del');
const email = document.getElementById('email_del');

async function deleteModalData(id) {
    const userByIdURL = '/api/admin/users/' + id;
    let userResponse = await fetch(userByIdURL);
    if (userResponse.ok) {
        let userJSONData =
            await userResponse.json().then(user => {
                id_del.value = `${user.id}`;
                fistName.value = `${user.firstName}`;
                lastName.value = `${user.lastName}`;
                age.value = `${user.age}`;
                email.value = `${user.username}`;
            })

    } else {
        alert(`Error, ${userResponse.status}`)
    }
}

async function deleteUser() {
    let url = '/api/admin/users/' + id_del.value + '/delete'

    let method = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    }

    await fetch(url, method).then(() => {
        $('#deleteCloseBtn').click();
        getAdminGeneralPage();
    })
}

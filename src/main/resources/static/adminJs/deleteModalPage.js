const form_del = document.getElementById('formForDeleting');
const id_del = document.getElementById('id_del');
const firstName_del = document.getElementById('First name_del');
const lastName_del = document.getElementById('Last name_del');
const age_del = document.getElementById('age_del');
const username_del = document.getElementById('email_del');

/*async function deleteModalData(id) {
    const userByIdURL = '/api/admin/users/' + id;
    let userResponse = await fetch(userByIdURL);
    if (userResponse.ok) {
        let userJSONData =
            await userResponse.json().then(user => {
            id_del.value = `${user.id}`;
            firstName.value = `${user.firstName}`;
            lastName.value = `${user.lastName}`;
            age.value = `${user.age}`;
            username.value = `${user.username}`;
        })
    } else {
        alert(`Error, ${userResponse.status}`)
    }*/
async function deleteModalData(id) {
    const url = '/api/admin/users/' + id;
    let usersPage = await fetch(url);
    if (usersPage.ok) {
        let userData =
            await usersPage.json().then(user => {
                id_del.value = `${user.id}`;
                firstName_del.value = `${user.firstName}`;
                lastName_del.value = `${user.lastName}`;
                age_del.value = `${user.age}`;
                username_del.value = `${user.username}`;
            })
    } else {
        alert(`Error, ${usersPage.status}`)
    }
}

async function deleteUser() {
    /*let url = '/api/admin/users/' + form.id.value + '/delete'

    let method = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    }

    await fetch(url, method).then(() => {
        $('#deleteCloseBtn').click();
        getAdminGeneralPage();
    })*/
}
/*$('#delete').on('show.modal', ev => {
    let button = $(ev.relatedTarget);
    let id = button.data('id');
    deleteModalData(id);
})*/

/*
async function deleteModalData(id) {
    let user = await getUser(id);
    let form = document.forms["deletingForm"];
    let roleList = user.role.map(role => role.substring(1).concat(" ")).toString().replaceAll(",", "");
    let role = roleList.split(" ");
    form.id.value = user.id;
    alert(user.id)
    form.firstName.value = user.firstName;
    form.lastName.value = user.lastName;
    form.age.value = user.age;
    form.username.value = user.username;


    $('#roles_del').empty();


    for (let i = 0; i < role.length - 1; i++) {
        let el = document.createElement("option");
        el.text = role[i];
        el.value = i + "";
        $('#roles_del')[0].appendChild(el);
    }
}

async function getUser(id) {
    let url = "http://localhost:8080/api/admin/users/" + id;
    let response = await fetch(url);
    alert(response.json().then(user =>{
        alert(user.id);
    }))
    return await response.json();
}
*/

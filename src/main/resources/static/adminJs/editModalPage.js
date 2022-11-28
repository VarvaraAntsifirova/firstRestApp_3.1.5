const form_ed = document.getElementById('formForEditing');
const id_ed = document.getElementById('id_ed');
const firstName = document.getElementById('First name_ed');
const lastName = document.getElementById('Last name_ed');
const age = document.getElementById('age_ed');
const email = document.getElementById('email_ed');
const password = document.getElementById('password_ed');

async function editModalData(id) {
    const url = '/api/admin/users/' + id;
    let usersPageEd = await fetch(url);
    if (usersPageEd.ok) {
        let userData =
            await usersPageEd.json().then(user => {
                id_ed.value = `${user.id}`;
                firstName.value = `${user.firstName}`;
                lastName.value = `${user.lastName}`;
                age.value = `${user.age}`;
                email.value = `${user.username}`;
                password.value = `${user.password}`;
                getRolesForEditForm();
            })
    } else {
        alert(`Error, ${usersPageEd.status}`)
    }
}

async function editUser() {
    let url = '/api/admin/users/' + id_ed.value + '/edit'
    let listOfRole = [];

    for (let i = 0; i < form.roles.options.length; i++) {
        if (form.roles.options[i].selected) listOfRole.push({
            id: form.roles.options[i].value
        })
    }

    let method = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                age: form.age.value,
                username: form.username.value,
                password: form.password.value,
                roles: listOfRole
            })
    }

    await fetch(url, method).then(() => {
        $('#closeBtn_ed').click();
        getAdminGeneralPage();
    })
}

async function getRolesForEditForm() {
    const getRolesURL = '/api/admin/roles'
    let rolesPage = await fetch(getRolesURL);

    if (rolesPage.ok) {
        let rolesData =
            await rolesPage.json().then(roles => {
                let roleUser = roles[0];
                let roleAdmin = roles[1];
                form.roles.options[0] = new Option('USER', `${roleUser.id}`)
                form.roles.options[1] = new Option('ADMIN', `${roleAdmin.id}`)

            })
    } else {
        alert(`Error, ${rolesPage.status}`)
    }
}

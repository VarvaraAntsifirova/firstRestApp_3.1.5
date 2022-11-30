const url_new = '/rest/admin/new';
const roles_new = document.querySelector('#roles').selectedOptions;
const form_new = document.forms["formForCreatingNewUser"];

async function newUser() {
    form_new.addEventListener('submit', addNewUser)

    function addNewUser(e) {
        e.preventDefault();
        let listOfRole = [];
        for (let i = 0; i < roles_new.length; i++) {
            listOfRole.push("ROLE_" + roles_new[i].value);
        }

        fetch(url_new, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: form_new.firstName.value,
                lastName: form_new.lastName.value,
                age: form_new.age.value,
                username: form_new.username.value,
                password: form_new.password.value,
                roles: listOfRole
            })
        }).then(() => {
            form_new.reset();
            getAdminGeneralPage();
             $("#tabBtnAllUsers").click();
        });
    }
}
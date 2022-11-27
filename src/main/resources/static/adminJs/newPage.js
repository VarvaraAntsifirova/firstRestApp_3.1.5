const url = '/api/admin/newUser';
const roles = document.querySelector('#roles').selectedOptions;
const form = document.forms["formForCreatingNewUser"];

async function newUser() {

    form.addEventListener('submit', addNewUser)

    function addNewUser(e) {
        e.preventDefault();
        let listOfRole = [];
        for (let i = 0; i < roles.length; i++) {
            listOfRole.push(roles[i].value);
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                age: form.age.value,
                username: form.username.value,
                password: form.password.value,
                roles: listOfRole
            })
        }).then(() => {
            form.reset();
        });
    }
}
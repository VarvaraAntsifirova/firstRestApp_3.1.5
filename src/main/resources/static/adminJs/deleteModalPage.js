let deleteModal = document.getElementById('deleteModal');
let span2 = document.getElementsByClassName("close")[2];
let span3 = document.getElementsByClassName("close")[3];

function deleteModalPage() {
    deleteModal.style.display = "block";
}

span2.onclick = function () {
    deleteModal.style.display = "none";
}

span3.onclick = function () {
    deleteModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
}
/*
<form class="text-center" th:method="DELETE"
      th:action="@{/admin/users/{id}/delete(id=${user.id})}"
      th:object="${user}">
    <div class="modal-body col-md text-center">
        <br>

            <label for="id_del"><strong>ID</strong></label>
            <input type="text" class="form-control" name="id"
                   id="id_del" th:value="${user.getId()}"
                   placeholder="ID" disabled>

        </br>

        <label for="First name_del"><strong> First
            name </strong></label>
        <input type="text" class="form-control"
               th:value="${user.getFirstName()}"
               id="First name_del" placeholder="First name" disabled>

        </br>

        <label for="Last name_del"><strong> Last
            name </strong></label>
        <input type="text" class="form-control"
               th:value="${user.getLastName()}"
               id="Last name_del" placeholder="Last name" disabled>

        </br>


        <label for="age_del"><strong> Age </strong></label>
        <input type="number" class="form-control"
               th:value="${user.getAge()}"
               id="age_del" placeholder="Age" disabled>

        </br>

        <label for="email_del"><strong>Email</strong></label>
        <input th:name="name" th:type="email"
               class="form-control" id="email_del"
               th:value="${user.username}" disabled/>

    </br>

    <label><strong> Role </strong></label>
    <select class="form-select" size="2" name="roles" disabled>
        <option>USER</option>
        <option>ADMIN</option>
    </select>
</div>


&lt;!&ndash; Низ модального окна&ndash;&gt;

<div class="modal-footer">
    <button class="btn btn-secondary" data-dismiss="modal"
            type="button">Close
    </button>
    <button type="submit" class="btn btn-danger">
        Delete
    </button>
</div>
&lt;!&ndash; Низ модального окна&ndash;&gt;
</form>*/

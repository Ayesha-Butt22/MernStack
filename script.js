//script.js
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");

const addUserBtn = document.querySelector('#addUserModal .btn-primary');
const tableBody = document.querySelector("table tbody");

addUserBtn.addEventListener("click", function()
{
    const name = nameInput.value;
    const email = emailInput.value;
    const role = roleInput.value;


if(name==="" || email==="" || role==="")
{
    alert("Please fill all the fields");
    return;
}

const newRow = document.createElement("tr");
newRow.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${role}</td>
<td>
<i class="bi bi-trash text-danger delete-icon" style="cursor:pointer;"></i>

</td>
    `;

    tableBody.appendChild(newRow);
    nameInput.value = "";
    emailInput.value = "";
    roleInput.value = "";

    const modalElement = document.getElementById('addUserModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  modalInstance.hide();
  });


  tableBody.addEventListener('click', function(event) {
  
  if(event.target.classList.contains('delete-icon')) {
    const row = event.target.closest('tr'); 
    row.remove();
  }
});



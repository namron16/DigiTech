document.addEventListener("DOMContentLoaded", function () {
  function submitForm(event) {
    event.preventDefault();

    var selectedOption = document.querySelector(
      'input[name="logo-options"]:checked'
    );
    var logoOption = selectedOption ? selectedOption.id : null;

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;

    console.log("Selected Logo Option: " + logoOption);
    console.log("User Information:");
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Description: " + description);

    document.querySelector(
      'input[name="logo-options"]:checked'
    ).checked = false;
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("description").value = "";
  }

  document
    .getElementById("logo-submit-btn")
    .addEventListener("click", submitForm);
});

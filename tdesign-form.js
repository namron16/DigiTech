document.addEventListener("DOMContentLoaded", function () {
  function submitForm(event) {
    event.preventDefault();

    var selectedOption = document.querySelector(
      'input[name="design-options"]:checked'
    );
    var designOption = selectedOption ? selectedOption.id : null;

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;

    console.log("Selected T-Shirt Design Option: " + designOption);
    console.log("User Information:");
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Description: " + description);
    alert("Thank you! Your Details and Request have been sent");
    document.querySelector(
      'input[name="design-options"]:checked'
    ).checked = false;
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("description").value = "";
  }

  document
    .getElementById("tdesign-submit-btn")
    .addEventListener("click", submitForm);
});

document.addEventListener("DOMContentLoaded", function () {
  function submitForm(event) {
    event.preventDefault();

    let selectedOption = document.querySelector(
      'input[name="logo-options"]:checked'
    );
    let logoOption = selectedOption ? selectedOption.id : null;

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let description = document.getElementById("description").value;
    let cardName = document.getElementById("card-name").value;
    let cardNumber = document.getElementById("card-number").value;
    let expMonth = document.getElementById("exp-month").value;
    let zipcode = document.getElementById("zip-code").value;
    let expYear = document.getElementById("exp-year").value;
    let cvv = document.getElementById("cvv").value;

    if (
      !logoOption ||
      !name ||
      !phone ||
      !email ||
      !description ||
      !cardName ||
      !cardNumber ||
      !expMonth ||
      !zipcode ||
      !expYear ||
      !cvv
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Selected Logo Option: " + logoOption);
    console.log("User Information:");
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Description: " + description);
    alert("Thank you! Your Details and Request have been sent");
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

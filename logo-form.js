document.addEventListener("DOMContentLoaded", function () {
  function submitForm(event) {
    event.preventDefault();

    let selectedOption = document.querySelector(
      'input[name="logo-options"]:checked'
    );
    let logoOption = selectedOption ? selectedOption.id : null;

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;

    if (!logoOption || !name || !phone || !amount || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Selected Logo Option: " + logoOption);
    console.log("User Information:");
    console.log("Name: " + name);
    console.log("Amount: " + amount);
    console.log("Description: " + description);
    alert("Thank you! Your Details and Request have been sent");
    document.querySelector(
      'input[name="logo-options"]:checked'
    ).checked = false;
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  }

  document
    .getElementById("logo-submit-btn")
    .addEventListener("click", submitForm);
});

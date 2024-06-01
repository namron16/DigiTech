document.addEventListener("DOMContentLoaded", function () {
  function submitForm(event) {
    event.preventDefault();

    let selectedOption = document.querySelector(
      'input[name="design-options"]:checked'
    );
    let designOption = selectedOption ? selectedOption.id : null;

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;

    if (!designOption || !name || !phone || !description || !amount) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Selected T-Shirt Design Option: " + designOption);
    console.log("User Information:");
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Description: " + description);
    console.log("Amount: " + amount);

    alert("Thank you! Your Details and Request have been sent");

    document.querySelector(
      'input[name="design-options"]:checked'
    ).checked = false;
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  }

  document
    .getElementById("tdesign-submit-btn")
    .addEventListener("click", submitForm);
});

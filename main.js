document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the submission of the contact form
  function submitContactForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Log form data to the console (you can replace this with your desired action)
    console.log("Contact Form Data:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  // Function to handle the submission of the logo options form
  function submitLogoOptionsForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get selected logo option
    var selectedOption = document.querySelector(
      'input[name="logo-options"]:checked'
    );
    var logoOption = selectedOption ? selectedOption.id : null;

    // Log selected logo option to the console (you can replace this with your desired action)
    console.log("Selected Logo Option: " + logoOption);

    // Clear form fields
    var radioButtons = document.querySelectorAll('input[name="logo-options"]');
    radioButtons.forEach(function (button) {
      button.checked = false;
    });
  }

  // Function to handle the submission of the t-shirt design options form
  function submitTDesignOptionsForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get selected t-shirt design option
    var selectedOption = document.querySelector(
      'input[name="design-options"]:checked'
    );
    var designOption = selectedOption ? selectedOption.id : null;

    // Log selected t-shirt design option to the console (you can replace this with your desired action)
    console.log("Selected T-Shirt Design Option: " + designOption);

    // Clear form fields
    var radioButtons = document.querySelectorAll(
      'input[name="design-options"]'
    );
    radioButtons.forEach(function (button) {
      button.checked = false;
    });
  }

  // Attach event listeners to form submission buttons
  document
    .getElementById("contact-btn")
    .addEventListener("click", submitContactForm);
  document
    .querySelector(".logo-btn")
    .addEventListener("click", submitLogoOptionsForm);
  document
    .querySelector(".tdesign-btn")
    .addEventListener("click", submitTDesignOptionsForm);
});

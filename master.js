let userName;
let userEmail;
let userPhone;
let userMessage;

document.getElementById("contact-btn").onclick = function () {
  userName = document.getElementById("name").value;
  userPhone = document.getElementById("phone").value;
  userEmail = document.getElementById("email").value;
  userMessage = document.getElementById("message").value;

  console.log("Contact Form Details:");
  console.log("Name: " + userName);
  console.log("Phone: " + userPhone);
  console.log("Email: " + userEmail);
  console.log("Message: " + userMessage);

  alert("Thank you! Your Details and Message have been sent");
};

var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");


function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function checkEmail() {
  var email = emailField.value;

  if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email address";
    emailError.style.color = "red";
    emailError.style.top = "2px";
    emailField.style.borderColor = "red";
  } else {
    emailError.textContent = "Email is valid";
    emailError.style.color = "green";
    emailError.style.top = "2px";
    emailField.style.borderColor = "green";
  }
};
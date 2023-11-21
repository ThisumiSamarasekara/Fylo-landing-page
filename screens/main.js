document.getElementById("getStartedBtn").addEventListener("click", function () {
  var email = document.getElementById("emailInput").value;
  var errorMessage = document.getElementById("error-message");

  if (validateEmail(email)) {
    // Clear previous error messages
    errorMessage.textContent = "";
    document.getElementById("emailInput").style.border = "2px solid #ccc";

    alert("Email is valid !");
  } else {
    // Display error message and change border color
    errorMessage.textContent = "Please enter a valid email address";
  }
});

// Add event listener for the "input" event on the email input field
document.getElementById("emailInput").addEventListener("input", function () {
  // Clear the error message when the user types in the email field
  document.getElementById("error-message").textContent = "";
});

function validateEmail(email) {
  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document
  .getElementById("getStartedButton")
  .addEventListener("click", function () {
    var email = document.getElementById("emailInput").value;
    var errorMessage = document.getElementById("errorMessage");

    if (validateEmail(email)) {
      // No error message is shown
      errorMessage.textContent = "";
      alert("Email is valid !");
    } else {
      // An error message is shown
      errorMessage.textContent = "Please enter a valid email address";
    }
  });

// Error message is cleared when user types the email
document.getElementById("emailInput").addEventListener("input", function () {
  document.getElementById("errorMessage").textContent = "";
});

// Validating the email
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

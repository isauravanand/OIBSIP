document.getElementById("login-form").addEventListener("submit", function (event) {
event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

// Hardcoded credentials for demonstration
var validUsername = "admin";
var validPassword = "password";

if (username === validUsername && password === validPassword) {
// Authentication successful
window.location.href = "app.html"; // Redirect to dashboard page
} else {
// Authentication failed
document.getElementById("error-message").innerText = "Invalid username or password";
}
});
// Form validation for registration (contact.html)
document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#register-form input[type='email']").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }
  alert("Registration successful! Welcome to Samahz FC.");
});
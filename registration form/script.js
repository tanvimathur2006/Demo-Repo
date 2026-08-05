// Select the form
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    // Get input values
    const fullName = document.querySelector('input[name="fullname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Name Validation
    if (fullName.length < 3) {
        alert("Name must be at least 3 characters long.");
        event.preventDefault();
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    // Phone Number Validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        event.preventDefault();
        return;
    }

    // Gender Validation
    if (!gender) {
        alert("Please select your gender.");
        event.preventDefault();
        return;
    }

    // Success
    alert("Registration Successful!");
});
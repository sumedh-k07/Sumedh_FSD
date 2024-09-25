document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    let errors = [];
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate Username
    if (username === '') {
        errors.push('Username cannot be empty.');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errors.push('Invalid email address.');
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        errors.push('Phone number must be exactly 10 digits.');
    }

    // Validate Password
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    if (!passwordPattern.test(password)) {
        errors.push('Password must be at least 7 characters long, contain at least one capital letter, one digit, and one special character (&, $, #, or @).');
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    // Display Errors
    const errorMessages = document.getElementById('errorMessages');
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        errorMessages.innerHTML = 'Registration successful!';
        // You can submit the form here if no errors are found
        // document.getElementById('registrationForm').submit();
    }
});

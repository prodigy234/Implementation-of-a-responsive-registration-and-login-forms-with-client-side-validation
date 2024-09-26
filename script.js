// Select forms and form fields
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ageInput = document.getElementById('age');
const genderRadio = document.querySelectorAll('input[name="gender"]');
const countrySelect = document.getElementById('country');
const termsCheckbox = document.getElementById('terms');

const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');

// Add event listeners for form submissions
registerForm.addEventListener('submit', validateRegisterForm);
loginForm.addEventListener('submit', validateLoginForm);

// Function to validate registration form
function validateRegisterForm(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate name
    if (nameInput.value.trim() === '') {
        displayErrorMessage(nameInput, 'Name is required');
    } else {
        hideErrorMessage(nameInput);
    }

    // Validate email
    if (!validateEmail(emailInput.value)) {
        displayErrorMessage(emailInput, 'Invalid email');
    } else {
        hideErrorMessage(emailInput);
    }

    // Validate password
    if (passwordInput.value.length < 8) {
        displayErrorMessage(passwordInput, 'Password must be at least 8 characters');
    } else {
        hideErrorMessage(passwordInput);
    }

    // Validate confirm password
    if (confirmPasswordInput.value !== passwordInput.value) {
        displayErrorMessage(confirmPasswordInput, 'Passwords do not match');
    } else {
        hideErrorMessage(confirmPasswordInput);
    }

    // Validate age
    if (ageInput.value < 18 || ageInput.value > 100) {
        displayErrorMessage(ageInput, 'Age must be between 18 and 100');
    } else {
        hideErrorMessage(ageInput);
    }

    // Validate gender
    if (!genderRadio.checked) {
        displayErrorMessage(genderRadio, 'Please select a gender');
    } else {
        hideErrorMessage(genderRadio);
    }

    // Validate country
    if (countrySelect.value === '') {
        displayErrorMessage(countrySelect, 'Please select a country');
    } else {
        hideErrorMessage(countrySelect);
    }

    // Validate terms
    if (!termsCheckbox.checked) {
        displayErrorMessage(termsCheckbox, 'Please agree to terms');
    } else {
        hideErrorMessage(termsCheckbox);
    }
}

// Function to validate login form
function validateLoginForm(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate login email
    if (!validateEmail(loginEmailInput.value)) {
        displayErrorMessage(loginEmailInput, 'Invalid email');
    } else {
        hideErrorMessage(loginEmailInput);
    }

    // Validate login password
    if (loginPasswordInput.value.length < 8) {
        displayErrorMessage(loginPasswordInput, 'Password must be at least 8 characters');
    } else {
        hideErrorMessage(loginPasswordInput);
    }
}

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Helper function to display error message
function displayErrorMessage(element, message) {
    const errorMessage = element.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Helper function to hide error message
function hideErrorMessage(element) {
    const errorMessage = element.nextElementSibling;
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}
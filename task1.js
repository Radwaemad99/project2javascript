//* Function to validate name should be characters
function validateName(name) {
    return /^[a-zA-Z ]+$/.test(name);
}

// Function to validate phone number 7 digits
function validatePhoneNumber(phone) {
    return /^\d{7}$/.test(phone);
}

// Function to validate mobile number 11 digits, starting with 010, 011, or 012
function validateMobileNumber(mobile) {
    return /^01[012]\d{8}$/.test(mobile);
}

// Function to validate email 
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to get user input and validation
function getUserInfo() {
    const name = prompt("Enter your name:");
    if (!validateName(name)) {
        alert("Invalid name. Please enter a valid name.");
        return getUserInfo(); // Recursively call the function until valid input is provided
    }

    const phoneNumber = prompt("Enter your phone number (7 digits):");
    if (!validatePhoneNumber(phoneNumber)) {
        alert("Invalid phone number. Please enter an 7-digit number.");
        return getUserInfo();
    }

    const mobileNumber = prompt("Enter your mobile number (11 digits, starting with 010, 011, or 012):");
    if (!validateMobileNumber(mobileNumber)) {
        alert("Invalid mobile number. Please enter an 11-digit number starting with 010, 011, or 012.");
        return getUserInfo();
    }

    const email = prompt("Enter your email address:");
    if (!validateEmail(email)) {
        alert("Invalid email address. Please enter a valid email address.");
        return getUserInfo();
    }

    return { name, phoneNumber, mobileNumber, email };
}

// Function to display the welcome message with color formatting
function displayWelcomeMessage(user, color) {
    const colors = {
        red: "color: red;",
        green: "color: green;",
        blue: "color: blue;"
    };

    const welcomeMessage = `
        <div style="${colors[color]}">
            Welcome dear guest ${user.name}!<br>
            Your telephone number is ${user.phoneNumber}<br>
            Your mobile number is ${user.mobileNumber}<br>
            Your email address is ${user.email}<br>
            Today is ${new Date().getDate()}<br>
            We are in month ${new Date().getMonth() + 1}
        </div>
    `;

    document.body.innerHTML = welcomeMessage;
}

// Get user info and color preference
let userInfo = getUserInfo();
let color = prompt("Choose a color for the welcome message (red, green, or blue):");

// Display the welcome message
displayWelcomeMessage(userInfo, color);
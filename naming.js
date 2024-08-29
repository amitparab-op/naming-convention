// app-script.js

// Camel case for variables and functions
let mainContainer = document.getElementById('main-container');
let submitButton = document.getElementById('submit-button');

// Snake case for constants
const MAX_USERS = 100;
const Api_key = "1234567890abcdef";

// Variables using snake case (lowercase)
let user_id = 1;
let total_price = 29.99;

// Pascal case for class names
class UserAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayUserInfo() {
        console.log(`User: ${this.firstName} ${this.lastName}`);
    }
}

// Function using camel case
function handleClickEvent() {
    const user = new UserAccount("Alice", "Johnson");
    user.displayUserInfo(); // Outputs: User: Alice Johnson

    console.log("API Key: " + api_key); // Outputs the API key
}

// Add event listener using camel case function name
submitButton.addEventListener('click', handleClickEvent);

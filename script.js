// Select elements from the DOM
const passwordGen = document.getElementById("password");
const yesNum = document.getElementById("includeNumbers");
const yesUpp = document.getElementById("includeUppercase");
const yesSpecial = document.getElementById("includeSpecial");
const generate = document.getElementById("passwordButton");
const passwordLengthInput = document.getElementById("passwordLength");

// Define character sets
const lCase = "abcdefghijklmnopqrstuvwxyz";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbs = "0123456789";
const speChar = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

// Function to generate a random password
function generatePassword(characterPool) {
    let password = "";
    let passwordLength = parseInt(passwordLengthInput.value) || 12; // Default to 12 if input is empty

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool.charAt(randomIndex);
    }

    return password;
}

// Event listener for the generate button
generate.addEventListener("click", function() {
    let characterPool = lCase; // Start with lowercase letters

    if (yesNum.checked) {
        characterPool += numbs;
    }
    if (yesUpp.checked) {
        characterPool += uCase;
    }
    if (yesSpecial.checked) {
        characterPool += speChar;
    }

    // Ensure at least one character set is selected
    if (characterPool.length === 0) {
        alert("Please select at least one option!");
        return;
    }

    // Generate password and display it
    passwordGen.value = generatePassword(characterPool);
});

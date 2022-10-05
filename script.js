// Assignment Code
function generatePassword() {
  var specialCharacters = "!@#$%^&*()?><:";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
}

amountCharacters = prompt("Choose a length of characters from 8-128.")
  if (amountCharacters < 8) {
    alert ("Try a larger number.");
  } else if (amountCharacters > 128) {
    alert ("Try a smaller number.");
  } else {
    alert("Your password will be exactly " + amountCharacters + " characters long.");
  }

var confirmationSpecialCharacter = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumbers; 

var confirmationSpecialCharacter = confirm("would you like to use any special characters?");
var confirmLowercase = confirm("would you like to use any lowercase letters?")
var confirmUppercase = confirm("would you like to use any uppercase letters?")
var confirmNumbers = confirm("would you like to use any numbers?")




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const createPassword = (amountCharacters, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  //return password;
  generateBtn.addEventListener("click", createPassword);
};

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//writePassword was changed to generatePassword
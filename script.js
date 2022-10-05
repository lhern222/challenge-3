// Assignment Code
var specialCharacters = "!@#$%^&*()?><:";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

var all = specials + lowercase + uppercase + numbers;

amountCharacters = prompt("Choose a length of characters from 8-128.")
  if (amountCharacters < 8) {
    alert ("Try a larger number.");
  } else if (amountCharacters > 128) {
    alert ("Try a smaller number.");
  } else {
    alert("Your password will be exactly " + amountCharacters + " characters long.");
  }

var confirmationSpecialCharacter ="";
var confirmLowercase;
var confrimUppercase;
var confirmNumbers; 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//writePassword was changed to generatePassword
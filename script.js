// Assignment Code
var specials = "!@#$%^&*()?><:";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

var all = specials + lowercase + uppercase + numbers;

amountCharacters = prompt("Choose a length of characters from 8-128.")
  if (amountCharacters < 8) {
    console.log ("try a larger number.");
  } else if (amountCharacters > 128) {
    console.log ("try a smaller number.");
  } else {
    alert("your password will be exactly " + amountCharacters + " characters long.");
  }

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//writePassword was changed to generatePassword
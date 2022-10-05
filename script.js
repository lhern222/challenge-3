// Assignment Code
document.querySelector("#generate").addEventListener("click", generatePassword);

var specialCharacter = ["!","@","#","$"];
var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O", "P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];


amountCharacters = prompt("Choose a length of characters from 8-128.")
  if (amountCharacters < 8) {
    alert ("Try a larger number.");
  } else if (amountCharacters > 128) {
    alert ("Try a smaller number.");
  } else {
    alert("Your password will be exactly " + amountCharacters + " characters long.");
  }

var confirmSpecialCharacter = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumbers; 

var confirmSpecialCharacter = confirm("would you like to use any special characters?");
var confirmLowercase = confirm("would you like to use any lowercase letters?")
var confirmUppercase = confirm("would you like to use any uppercase letters?")
var confirmNumbers = confirm("would you like to use any numbers?")

var specialCharacters = []

  if (confirmSpecialCharacter) {
   specialCharacters = specialCharacters.concat(specialCharacters)
  }

  if (confirmLowercase) {
    specialCharacters = specialCharacters.concat(lowercase);
  }

  if (confirmUppercase) {
    specialCharacters = specialCharacters.concat(uppercase)
  }

  if (confirmNumbers) {
    specialCharacters =  specialCharacters.concat(numbers)
  }

console.log(specialCharacters)

var randomPassword = ""

// Write password to the #password input
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const createPassword = (amountCharacters, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += specialCharacters.charAt(
      Math.floor(Math.random() * specialCharacters.length)
    );
  }
  //return password;
  generateBtn.addEventListener("click", createPassword);
};

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//writePassword was changed to generatePassword
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    // ask user how many characters they want to use 
    var length = parseInt(prompt('How many characters?'), 10);
    
    // make sure user enters a number
    if (Number.isNaN(length)){
        alert('Length must be a number');
        return null;
    }
    // make sure length is between 8 and 128
    if (length < 8 || length > 128){
        alert('Length must be more than 8 and less than or equal to 128.');
        return null;
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

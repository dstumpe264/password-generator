// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  
  function getCriteria() {
      
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
    
    // include special characters?
    var specialChar = confirm('Include special characters?');

    // upper case?
    var upperCase = confirm('Include upper case characters?');

    // lower case?
    var lowerCase = confirm('Include lower case characters?');
    
    // numbers?
    var numbers = confirm('Include numbers?');
    
    // must include at least 1
    if (specialChar === false &&
        upperCase === false &&
        lowerCase === false &&
        numbers === false
    ){
            alert('Hey dummy, you gotta have characters to create a password.');
            return null;
            
    }

    // store options as an object
    var criteria = {
        length: length,
        specialChar: specialChar,
        numbers: numbers,
        upperCase: upperCase,
        lowerCase: lowerCase,
    };
    
    // return criteria
    return criteria;
        
    }

    // random generator for selecting characters
    function getRandom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        var randomElement = arr[randomIndex];

        return randomElement;
    }


    // generate password matching all criteria
    function generatePassword(){
        // get criterias
        var criterias = getCriteria();

        // final result
        var result = [];

        // array of chars based on criterias
        var availableChars = [];

        // chars used to make sure at least one character of each selected type is used
        var includedChars = [];

        // exit if no options
        if(!criterias) return null;

        // get an array of all available chars to use for password and generate one of each to be used
        if(criterias.specialChar){
            availableChars = availableChars.concat(specialCharacters);
            includedChars.push(getRandom(specialCharacters));
        }
        if(criterias.numbers){
            availableChars = availableChars.concat(numericCharacters);
            includedChars.push(getRandom(numericCharacters));
        }
        if(criterias.lowerCase){
            availableChars = availableChars.concat(lowerCasedCharacters);
            includedChars.push(getRandom(lowerCasedCharacters));
        }
        if(criterias.upperCase){
            availableChars = availableChars.concat(upperCasedCharacters);
            includedChars.pop(getRandom(upperCasedCharacters));
        }

        // loop to create password 
        // length provided by user
        // random characters selected from array
        for (let index = 0; index < criterias.length; index++) {
            result.push(getRandom(availableChars));
            
        }

        // add char from each criteria
        for(let index = 0; index < includedChars.length; index++){
            result[index] = includedChars[index];
        }

        // return result as a string
        return result.join('');

    }
    
    
    // Assignment Code
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    // display password
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

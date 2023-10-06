// Assignment Code
var generateBtn = document.querySelector("#generate"); //Generate Password Button
//bonus - add saving to local storage with date and time it was saved
var savedPassword = localStorage.getItem("savedPassword");

// Add an event listener to the button
document.getElementById("clearLocalStorage").addEventListener("click", function() {
  localStorage.clear(); // This clears all data in local storage
  alert("Local Storage has been cleared.");
});



//date properties
function formatDateTime(date) {
  var timeParams = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return date.toLocaleDateString('en-US', timeParams);
}

//store formatted date variable based upon function properties
//Define function generatePassword


function generatePassword(){
  console.log("click")

  //prompts for password criteria: length, case, numbers, special

  //prompt("How many characters? (8-128 charcters)") 
  //prompt("Do you want to include lowercase?")
  //prompt("Do you want to include uppercase?")
  //prompt("Do you want to include numbers?")
  //prompt("Do you want to include special charcters?")

  //prompt for characters length
  var criteriaLength = window.prompt("How many characters? (8-128 characters)")
  //validate choice with criteria that ensures a number between 8 and 128 charcters is entered//
  if (isNaN(criteriaLength)) {  
    alert("You did not enter a number, try again.");
    return "Try again."
  }else {
    var num = parseFloat(criteriaLength);
  if (num < 8 || num > 128) {
    alert("You entered a number outside of the range, try again.");
    return "Try again."
  }

  if (criteriaLength === "")   {
    alert("You have to enter something. Try Again.")
    return "Try Again."
  }
  }
  //prompt for lowercase, pass user input into var 
  var criteriaLowercase = window.confirm("Do you want lowercase characters?");
  //prompt for uppercase, pass user input into var 
  var criteriaUppercase = window.confirm("Do you want uppercase characters?");
  //prompt for numbers, pass user input into var 
  var criteriaNum = window.confirm("Do you want lowercase characters?");
  //prompt for special characters, pass user input into var
  var criteriaSpecial = window.confirm("Do you want to include special characters (#$%&'()*+,-./:;<=>?@[\]^_`{|}~?)");
 //combine criteria choices, define characters lower, upper, num, special
  var criteriaCombine = "";
  if (criteriaLowercase) criteriaCombine += "abcdefghijklmnopqrstuvwxyz";
  if (criteriaUppercase) criteriaCombine += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (criteriaNum) criteriaCombine += "0123456789";
  if (criteriaSpecial) criteriaCombine += "#$%&'()*+,-./:;<=>?@[\]^_`{|}~?)";

 //validate inputs according to rules; make sure at least one character type is chosen, otherwise what will be generatad
  if (criteriaCombine === "") {
    alert("You selected, "+ criteriaLength + "characters, but no character type. There needs to be at least one character type chosen. Try again.");
    return "Try Again. Choose at least one character type.";
  }

 //generate random password with criteria, loop through, charat method to return value at index
  var genPassword = "";
  for (let i = 0; i < criteriaLength; i++) {
       var randomPass = Math.floor(Math.random() * criteriaCombine.length);
       genPassword += criteriaCombine.charAt(randomPass);
  } 

 //return the random password with criteria
 return genPassword; 
}
// Write password to the #password input
function writePassword() {       
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Get the current date and time
  var savedDateTime = new Date()
  var formattedDateTime = formatDateTime(savedDateTime);

//set value in local storage
  localStorage.setItem("savedPassword", password);
  localStorage.setItem("savedDateTime", formattedDateTime);
 passwordText.value = password;

var savedDataElement = document.getElementById("savedData");
 savedDataElement.textContent = "Previously Generated Password: " + password + " at " + formattedDateTime;
}

generateBtn.addEventListener("click", writePassword); //button clicks and that calls the writePassword() function


// Add event listener to generate button

//BONUS 1: add a button to copy the password to clipboard

function copyPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.select();
  document.execCommand("copy");

  alert("Password copied to clipboard.");
}


//BONUS 2: Save Generated Password to Local storage
function displaySavedPassword() {
  var storedPassword = localStorage.getItem("savedPassword");
  var storedDateTime = localStorage.getItem("savedDateTime");
  var savedDataElement = document.getElementById("savedData");

  if (storedPassword && storedDateTime) {
  savedDataElement.textContent = "Previously Generated Password: " + storedPassword + " @ " + storedDateTime;
  } else {
  savedDataElement.textContent = "No saved password data found.";
 }
}

displaySavedPassword();


/* PSEUDO CODE 9/30/2023
1. Click Button to activate the password criteria prompts
2. Criteria Prompt 1 appears --> window.prompt-->length of password..) *between 8-128 characaters*
3. User Types nunber for passwordLength
4. passwordLength var assinged number value between 8-128 
  a. code validates value
5. Criteria Prompt 2 appears --> window.prompt-->characters type = include lowercase TRUE/FALSE
6. User chooses , if yes var lowercase = TRUE, if no, lowercase = FALSE
  a. code validates value
7. Criteria Prompt 3 appears --> window.prompt-->include uppercase, numeric, and/or special characters
8. Follow same logic depedning on user input for boolean value on remaining special charcters
  a. code validates value
9. Require that a value/answer be selected for each criteria question and if charcter type chosen, require cannot answer null value
10. Javascript code generates randomized password at passwordlength made up of the user determined criteria
11. Display in password generator supplied windown
12. BONUS: store in local memory
13. BONUS2: Include a button that copies the password to clipboard
*/

/* USER/CCEPTANCE CRITERIA FOR REFERENCE

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/
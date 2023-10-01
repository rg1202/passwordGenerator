// Assignment Code
var generateBtn = document.querySelector("#generate"); //Generate Password Button

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
  }else {
    var num = parseFloat(criteriaLength);
  if (num < 8 || num > 128) {
    alert("You entered a number outside of the range, try again.")
  }
  }
  //prompt for lowercase 

  var criteriaLowercase = window.confirm("Do you want lowercase characters?")

  //prompt for uppercase 

  var criteriaUppercase = window.confirm("Do you want uppercase characters?")

  //prompt for numbers 

  var criteriaNum = window.confirm("Do you want lowercase characters?")

  //prompt for special characters

  var criteriaSpecial = window.confirm("Do you want to include special characters (#$%&'()*+,-./:;<=>?@[\]^_`{|}~?)")



  

  //validate inputs according to rules



  //return "test" --test a Return to the password field to 


 return criteriaLength + criteriaLowercase

}


// Write password to the #password input
function writePassword() {       
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


//Pre-writing: Inspect, Console thows ReferenceError: generatePassword is not defined
//TO DO: will need to write code to define generatePassword() which is called when generateBtn is clicked


  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //button clicks and that calls the writePassword() function


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


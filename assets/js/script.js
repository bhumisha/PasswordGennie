// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password Function
function generatePassword() {
  	var minPasswordLen = 8,
    maxPasswordLen = 128;
  	var ifReadyToGeneratePassword = confirm(
    	"Do you want to create your own password criteria? "
  	);
  
	if (ifReadyToGeneratePassword) {
    //Getting Password which should >8 and <128
    	var passwordLength = getPasswordLength();
    	if (passwordLength < minPasswordLen || passwordLength > maxPasswordLen) {
      		passwordLength = getPasswordLength();
    	}

    //Lets Start with Character Type

		var passwordRegex = "";
		var lowerCaseAllowed = confirm(
			"Do you want to includes lowercase(a-z) letters in password?"
		);
		var upperCaseAllowed = confirm(
			"Do you want to includes UPPERCASE(A-Z) letters in password?"
		);
		var numericAllowed = confirm(
			"Do you want to includes Numbers(0-9) in password?"
		);
		var specialCharsAllowed = confirm(
			"Do you want to includes Special Characters in password?"
		);

		var isAtleastOneOptionSelected = false;
		if (
			lowerCaseAllowed ||
			upperCaseAllowed ||
			numericAllowed ||
			specialCharsAllowed
		) {
			isAtleastOneOptionSelected = true;
		}
		
		if (isAtleastOneOptionSelected) {
			var pwdCriteria = "";
			
			if (lowerCaseAllowed) {
				pwdCriteria += "abcdefghijklmnopqrstuvwxyz";
			}

			if (upperCaseAllowed) {
				pwdCriteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			}

			if (numericAllowed) {
				pwdCriteria += "0123456789";
			}

			if (specialCharsAllowed) {
				pwdCriteria += "@$&*~_:;";
			}
			return getPasswordFromCriteria(pwdCriteria, passwordLength);
		} 
		
		else 
		{
			alert(
			"You have not selected any password criteria!! Please selecet atleast one"
			);
			generatePassword();
    }
    //passwordRegex = "/^([a-zA-Z])([0-9])(~*&$@#){"+passwordLength+"}$/g";

    // var lowerCaseAllowed = 0, upperCaseAllowed=0; numericAllowed=0; isSpecialChar = true, specialChar = "";
    // lowerCaseAllowed = prompt("<b>Do you want to includes LowerCase letters in yor password? if Yes than please enter count of lowercase letters");
    // upperCaseAllowed = prompt("Does your password includes UpperCase letters? if Yes than please enter count of uppercase letters ");
    // numericAllowed = prompt("Does your password includes Numbers? if Yes than please enter count of number ");
    // isSpecialChar = confirm("Does your password includes Special?");
    // if(isSpecialChar){
    //   specialChar = prompt("Please enter any special characters which you want to include in password ");
    // }
    // // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    // if(lowerCaseAllowed + upperCaseAllowed + numericAllowed + (specialChar.length) === passwordLength){
    //     console.log("Password generate");
    //     var password = "[^(?=.*\d)(?=.*[a-z]).{(?=.*[A-Z]).{8,128}$]]";
    // }
  } else {
    return "A@babc$23A";
  }
}

function getPasswordFromCriteria(criteria, passwordLen) {
	var pwd = "";
	for (var i = 0; i < passwordLen; i++) {
		pwd += criteria.charAt([Math.floor(Math.random() * criteria.length)]);
	}
  	return pwd;
}

function getPasswordLength() {
	var passwordLen = prompt(
		"Please enter length of Password \n (Your password must have minimum 8 to maximum 128 chars)"
	);
	return passwordLen;
}

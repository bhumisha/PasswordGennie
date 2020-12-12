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
  	var minPasswordLen = 8, maxPasswordLen = 128;

	//Ask user is ready to create own password
  	var ifReadyToGeneratePassword = confirm(
    	"Click OK to create your own secured password."
  	);
  
	if (ifReadyToGeneratePassword) {
    //Getting Password which should >8 and <128
		var passwordLength = getPasswordLength();
		
    	if (passwordLength < minPasswordLen || passwordLength > maxPasswordLen) {
      		passwordLength = getPasswordLength();
		}
	
    	//Lets Start with Password Character Type
		var pwdCriteria =  getPasswordCriteriaString();
		// console.log("pwdCriteria : " + pwdCriteria);
		return getPasswordFromCriteria(pwdCriteria, passwordLength);
  	} 
	else { //// If user is not ready to generate the password.
		
		alert("Here is your default secured password");
		defaultPasswordCriteria = "abcdefghijKLMNOPQRSTUVWXYZ0123!\"#$%&'()";
    	return getPasswordFromCriteria(defaultPasswordCriteria,15);
	}
}

//Generate password criteria sring based on the user select option.
function getPasswordCriteriaString(){
	//setting variables based on user response 
	var lowerCaseAllowed = confirm(
		"Click OK to confirm to including lowercase(a-z) characters in your password."
	);
	var upperCaseAllowed = confirm(
		"Click OK to confirm to including uppercase(A-Z) characters in your password."
	);
	var numericAllowed = confirm(
		"Click OK to confirm to including numberic(0-9) characters in your password."
	);
	var specialCharsAllowed = confirm(
		"Click OK to confirm to including special characters in your password."
	);

	var isAtleastOneOptionSelected = false;

	//Atleast one option should be seleted
	if (lowerCaseAllowed || upperCaseAllowed || numericAllowed || specialCharsAllowed) {
		isAtleastOneOptionSelected = true;
	}

	//generating password criteria string based on selected criteria
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
			pwdCriteria += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
		}
		return pwdCriteria;
	}
	else  
	{
		alert( "You have not selected any password criteria!! Please selecet atleast one");
		return  getPasswordCriteriaString();
	}

}

//Generate password using random function from given string and length.
function getPasswordFromCriteria(criteria, passwordLen) {
	var pwd = "";
	for (var i = 0; i < passwordLen; i++) {
		pwd += criteria.charAt([Math.floor(Math.random() * criteria.length)]);
	}
  	return pwd;
}

//Get password Length 
function getPasswordLength() {
	return  prompt( "How many characters would you like your password to contain? \n (Password lengh should be between 8 to 128)");
	
}

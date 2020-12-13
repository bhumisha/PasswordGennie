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
	//Ask user is ready to create own password
  	var ifReadyToGeneratePassword = confirm(
    	"Click OK to create your own secured password."
  	);
  
	if (ifReadyToGeneratePassword) {
    	//Getting Password which should >8 and <128
		var passwordLength = getPasswordLength();
    	//Lets Start with Password Character Type
		var pwdCriteria =  getPasswordCriteriaString();
		// console.log("pwdCriteria : " + pwdCriteria);
		return getPasswordFromCriteria(pwdCriteria, passwordLength);
  	} 
	else { //// If user is not ready to generate the password.
		
		alert("Here is your default secured password");
		var defaultPasswordCriteria = ["abcdefghij","KLMNOPQRSTUVWXYZ","012345","!\"#$%&'()"];
    	return getPasswordFromCriteria(defaultPasswordCriteria,15);
	}
}

//Generate password criteria sring based on the user select option.
function getPasswordCriteriaString(){

	//Default criteria strings
	var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
	var numbericChars =  "0123456789";

	//asking users for password  variables based on user response 
	var lowerCaseAllowed = confirm("Click OK to confirm to including LOWERCASE(a-z) characters in your password.");
	var upperCaseAllowed = confirm("Click OK to confirm to including UPPERCASE(A-Z) characters in your password.");
	var numericAllowed = confirm("Click OK to confirm to including NUMERIC(0-9) characters in your password.");
	var specialCharsAllowed = confirm("Click OK to confirm to including SPECIAL CHARACTERS in your password.");

	var isAtleastOneOptionSelected = false;
	//Atleast one option should be seleted
	if (lowerCaseAllowed || upperCaseAllowed || numericAllowed || specialCharsAllowed) {
		isAtleastOneOptionSelected = true;
	}

	//generating password criteria string based on selected criteria
	if (isAtleastOneOptionSelected) {
		var passwordOptionsArray = [];
		
		if (lowerCaseAllowed) {
			passwordOptionsArray.push(lowercaseChars);
		}

		if (upperCaseAllowed) {
			passwordOptionsArray.push(uppercaseChars);
		}
		
		if (numericAllowed) {
			passwordOptionsArray.push(numbericChars);
		}

		if (specialCharsAllowed) {
			passwordOptionsArray.push(specialChars);
		}
		return passwordOptionsArray;
	}
	else  
	{
		alert( "You have not selected any password criteria!! Please selecet atleast one");
		return  getPasswordCriteriaString();
	}

}

//Generate password using random function from given string and length.
function getPasswordFromCriteria(criteriaArray, passwordLen) {
	var finalPasswordStr = "";
	
	var selectedCriteriaOptions = criteriaArray.length;
		for (var i = 0; i < passwordLen; i++) {
			//This is atleast one char should be from each selected password criteria 
			if(i<selectedCriteriaOptions){
				for(var j=0;j<selectedCriteriaOptions ;j++){
					finalPasswordStr +=	criteriaArray[j].charAt([Math.floor(Math.random() * criteriaArray[j].length)]);
					i++; 
				}
			}
			var optionItemFromArray = criteriaArray[Math.floor(Math.random() * (criteriaArray.length) )];
			finalPasswordStr += optionItemFromArray.charAt([Math.floor(Math.random() * optionItemFromArray.length)]);
		}
	
	/* Search random password string from CriteriaString
	for (var i = 0; i < passwordLen; i++) {
		finalPasswordStr += criteria.charAt([Math.floor(Math.random() * criteria.length)]);
	}
	*/
  	return finalPasswordStr;
}

//Get password Length 
function getPasswordLength() {
	var minPasswordLen = 8, maxPasswordLen = 128;
	var passwordLength = prompt( "How many characters would you like your password to contain? \n (Password lengh should be between 8 to 128 characters)");
	if (passwordLength != "" && passwordLength != NaN && passwordLength >= minPasswordLen && passwordLength <= maxPasswordLen) {
		return passwordLength;
	}
	else{
		return getPasswordLength();
	}
}

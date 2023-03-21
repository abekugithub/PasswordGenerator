
function modifyPassword() {
var passwordLength = parseInt(prompt("How many characters would you like your password to contain? (must be between 8 and 128 characters)"));

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  passwordLength = parseInt(prompt("Please enter a valid number between 8 and 128."));
}

var useUppercase = confirm("Do you want to include uppercase letters in your password?");
var useLowercase = confirm("Do you want to include lowercase letters in your password?");
var useNumbers = confirm("Do you want to include numbers in your password?");
var useSymbols = confirm("Do you want to include special characters in your password?");

var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

var allowedChars = "";
if (useUppercase) {
  allowedChars += uppercaseChars;
}
if (useLowercase) {
  allowedChars += lowercaseChars;
}
if (useNumbers) {
  allowedChars += numberChars;
}
if (useSymbols) {
  allowedChars += symbolChars;
}

var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars[randomIndex];
}


var passwordText = document.querySelector('#password');
passwordText.value = password;


}
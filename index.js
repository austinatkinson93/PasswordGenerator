
// create variable arrays
var uppLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowLettersArray = "abcdefghijklmnopqrstuvwxyz".split("")
var specialArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ '".split("")
var numbersArray = "1234567890".split("")



//generate random functions
function getRandomUpper() {
    return uppLettersArray[Math.floor(Math.random() * 26)]
}
function getRandomLower() {
    return lowLettersArray[Math.floor(Math.random() * 26)]
}
function getRandomSpecial() {
    return specialArray[Math.floor(Math.random() * 31)]
}
function getRandomNumber() {
    return numbersArray[Math.floor(Math.random() * 10)]
}


function generatePassword() {
    
    // create userinput prompts
    var pasLength = prompt("how long would you like your password to be?")
    var capLettersAnswer = confirm("would you like your password to contain capital letters?")
    var lowLettersAnswer = confirm("would you like your password to contain lowercase letters?")
    var specialAnswer = confirm("would you like your password to contain special characters?")
    var numbersAnswer = confirm("would you like your password to contain numbers?")

    for (var i = 0; i < pasLength.length; i++) {

        if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer === true && numbersAnswer === true) {
            var allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890".split("")
            return 

        }
    }
}

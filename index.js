
// create variable arrays
var uppLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specialArray = "!#$%&'()*+-./:;<=>?@[\]^_`{|}~ '".split("");
var numbersArray = "1234567890".split("");

var password = "";


//generate random functions
// function getRandomUpper() {
//     return uppLettersArray[Math.floor(Math.random() * 26)]
// }
// function getRandomLower() {
//     return lowLettersArray[Math.floor(Math.random() * 26)]
// }
// function getRandomSpecial() {
//     return specialArray[Math.floor(Math.random() * 31)]
// }
// function getRandomNumber() {
//     return numbersArray[Math.floor(Math.random() * 10)]
// }



function generatePassword() {


    // create userinput confirms
    var capLettersAnswer = confirm("would you like your password to contain capital letters?")
    var lowLettersAnswer = confirm("would you like your password to contain lowercase letters?")
    var specialAnswer = confirm("would you like your password to contain special characters?")
    var numbersAnswer = confirm("would you like your password to contain numbers?")

    if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer === true && numbersAnswer === true) {
        var all = uppLettersArray += lowLettersArray += specialArray += numbersArray;
        var pasLength = prompt("how long would you like your password to be?")

        for (var index = 0; index < pasLength; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        return password
    } else if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer === true) {
        var all = uppLettersArray += lowLettersArray += specialArray;
        var pasLength = prompt("how long would you like your password to be?")

        for (var index = 0; index < pasLength; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        return password
    }
    else if (capLettersAnswer === true && lowLettersAnswer === true) {
        var all = uppLettersArray += lowLettersArray;
        var pasLength = prompt("how long would you like your password to be?")

        for (var index = 0; index < pasLength; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        return password
    }
    else if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer === true) {
        var all = uppLettersArray += lowLettersArray += specialArray;
        var pasLength = prompt("how long would you like your password to be?")

        for (var index = 0; index < pasLength; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        return password
    } else {
        alert("you must choose at least one parameter!")
    }
}



// console.log(generatePassword())

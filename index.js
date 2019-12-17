
// create variable arrays
var uppLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specialArray = "!#$%&'()*+-./:;<=>?@[\]^_`{|}~ '".split("");
var numbersArray = "1234567890".split("");

var gen = document.getElementById("generate")
//  var password = document.getElementById("password")

 var password = "";

// function concatt() {
//     uppLettersArray = uppLettersArray.concat(lowLettersArray)
//     console.log(uppLettersArray)
// }
// concatt()


function generatePassword() {

    var possibleChar = [];
    var pasLength = prompt("how long would you like your password to be?")

    var capLettersAnswer = confirm("would you like your password to contain capital letters?")
    var lowLettersAnswer = confirm("would you like your password to contain lowercase letters?")
    var specialAnswer = confirm("would you like your password to contain special characters?")
    var numbersAnswer = confirm("would you like your password to contain numbers?")
  
    if (capLettersAnswer === true) {
        possibleChar = possibleChar.concat(uppLettersArray);
    }
    else if (lowLettersAnswer === true) {
        possibleChar.concat(lowLettersArray);
        console.log(possibleChar)
    }
    else if (specialAnswer === true) {
        possibleChar = possibleChar.concat(specialArray);
    }
    else if (numbersAnswer === true) {
        possibleChar = possibleChar.concat(numbersArray);
    }
    

    if (capLettersAnswer || lowLettersAnswer || specialAnswer || numbersAnswer) {
        for (var index = 0; index < pasLength; index++) {
            var character = Math.floor(Math.random() * possibleChar.length);
            password.concat(possibleChar)
        }

        return password
    } else {
        alert("You must choose at least one parameter")
    }
}
console.log(password)

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



// function generatePassword() {
//     var password = "";


//     // create userinput confirms
//     var capLettersAnswer = confirm("would you like your password to contain capital letters?")
//     var lowLettersAnswer = confirm("would you like your password to contain lowercase letters?")
//     var specialAnswer = confirm("would you like your password to contain special characters?")
//     var numbersAnswer = confirm("would you like your password to contain numbers?")

//     // all true
//     if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer === true && numbersAnswer === true) {
//         var all = uppLettersArray += lowLettersArray += specialArray += numbersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password

//     }
//     // numbers not included
//     else if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer === true && numbersAnswer !== true) {
//         var all = uppLettersArray += lowLettersArray += specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     //  special characters not included
//     else if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer !== true && numbersAnswer === true) {
//         var all = uppLettersArray += lowLettersArray += numbersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // lower case letters not included
//     else if (capLettersAnswer === true && lowLettersAnswer !== true && specialAnswer === true && numbersAnswer === true) {
//         var all = uppLettersArray += numbersArray += specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // uppercase letters not included
//     else if (capLettersAnswer !== true && lowLettersAnswer === true && specialAnswer === true && numbersAnswer === true) {
//         var all = lowLettersArray += numbersArray += specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // uppercase and lowercase only
//     else if (capLettersAnswer === true && lowLettersAnswer === true && specialAnswer !== true && numbersAnswer !== true) {
//         var all = uppLettersArray += lowLettersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // uppercase and numbers only
//     else if (capLettersAnswer === true && lowLettersAnswer !== true && specialAnswer !== true && numbersAnswer === true) {
//         var all = uppLettersArray += numbersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // uppercase and special characters only
//     else if (capLettersAnswer === true && lowLettersAnswer !== true && specialAnswer === true && numbersAnswer !== true) {
//         var all = uppLettersArray += specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // lowercase and numbers only
//     else if (capLettersAnswer !== true && lowLettersAnswer === true && specialAnswer !== true && numbersAnswer === true) {
//         var all = lowLettersArray += numbersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // lowercase and special characters only
//     else if (capLettersAnswer !== true && lowLettersAnswer === true && specialAnswer === true && numbersAnswer !== true) {
//         var all = lowLettersArray += specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // special characters and numbers only
//     else if (capLettersAnswer !== true && lowLettersAnswer !== true && specialAnswer === true && numbersAnswer === true) {
//         var all = numbersArray += specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // only uppercase
//     else if (capLettersAnswer === true && lowLettersAnswer !== true && specialAnswer !== true && numbersAnswer !== true) {
//         var all = uppLettersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // only lowercase
//     else if (capLettersAnswer !== true && lowLettersAnswer === true && specialAnswer !== true && numbersAnswer !== true) {
//         var all = lowLettersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     // only Numbers
//     else if (capLettersAnswer !== true && lowLettersAnswer !== true && specialAnswer !== true && numbersAnswer === true) {
//         var all = numbersArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }

//     // only special characters
//     else if (capLettersAnswer !== true && lowLettersAnswer !== true && specialAnswer === true && numbersAnswer !== true) {
//         var all = specialArray;
//         var pasLength = prompt("how long would you like your password to be?")

//         for (var index = 0; index < pasLength; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         return password
//     }
//     else {
//         alert("you must choose at least one parameter!")
//     }
// }





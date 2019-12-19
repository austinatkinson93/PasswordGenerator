// create variable arrays
var uppLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var specialArray = "!#$%&'()*+-./:;<=>?@[]^_`{|}~ '".split("");
var numbersArray = "1234567890".split("");

// call to HTML elements
var textEl = document.querySelector("#password");
var gen = document.getElementById("generate");
var copy = document.getElementById("copy");


var password = "";

// generate password function
function generatePassword() {
    var possibleChar = [];
    var pasLength = prompt("how long would you like your password to be?");

    if (pasLength < 128 && pasLength > 8) {

        var capLettersAnswer = confirm(
            "would you like your password to contain capital letters?"
        );
        var lowLettersAnswer = confirm(
            "would you like your password to contain lowercase letters?"
        );
        var specialAnswer = confirm(
            "would you like your password to contain special characters?"
        );
        var numbersAnswer = confirm(
            "would you like your password to contain numbers?"
        );

        if (capLettersAnswer === true) {
            possibleChar = possibleChar.concat(uppLettersArray);
        }

        if (lowLettersAnswer === true) {
            possibleChar = possibleChar.concat(lowLettersArray);
        }

        if (specialAnswer === true) {
            possibleChar = possibleChar.concat(specialArray);
        }

        if (numbersAnswer === true) {
            possibleChar = possibleChar.concat(numbersArray);
            console.log(possibleChar);
        }

        if (
            capLettersAnswer ||
            lowLettersAnswer ||
            specialAnswer ||
            numbersAnswer
        ) {
            for (var index = 0; index < pasLength; index++) {

                var characterIndex = Math.floor(Math.random() * possibleChar.length);
                var character = possibleChar[characterIndex];
                password = password.concat(character);

            }

            textEl.value = password;
        } else {
            alert("You must choose at least one parameter");
        }
    } else {
        alert("Password must be greater than 8 and less than 128 characters")
    }
}


// added event listeners
gen.addEventListener("click", generatePassword);

copy.addEventListener("click", function () {
    textEl.select();
    document.execCommand("copy");
    alert("Your password has been copied to your clipboard!")
});






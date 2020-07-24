var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1,2,3,4,5,6,7,8,9];

abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

abc2 =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var choice;

var toUpper = function (x) {
    return x.toUpperCase();
};
abc2 = abc.map(toUpper);
var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    ps = generatePassword()
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    enter = parseInt(prompt("Choose password between 8 to 128 characters"));
    if (!enter) {
        alert("Needs Value");
    }
    else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128 lenght"));
    }
    else {
        confirmNumber = confirm("Numbers?");
        confirmCharacter = confirm("speacial characters?");
        confirmUppercase = confirm("Uppercase letters?");
        confirmLowercase = confirm("lower case letters?");
    };
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Must choose a criteria");
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, abc, abc2);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, abc2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, abc);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(abc, abc2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(abc, abc2);
    }

    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(abc);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(abc2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = abc.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = abc.concat(abc2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(abc2);
    }

    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = abc;
    }

    else if (confirmUppercase) {
        choices = space.concat(abc2);
    };

    var password = [];


    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

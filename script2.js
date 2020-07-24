var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1,2,3,4,5,6,7,8,9];

abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var choice;

var toUpper = function (x) {
    return x.toUppercase();
    };
number2 = number.map(toUpper);
var get = document.querySelector("#generate");  
get.addEventListener("click", function () {
ps = generatePassword()
document.getElementById("password").placeholder = ps;
});

function generatePassword() {
enter=parseInt(prompt("Choose password between 8 to 128 characters"));
if (!enter) {
alert("Needs Value");
}
else if (enter <8 || enter > 128) {
enter =parseInt(prompt("You must choose between 8 and 128 lenght"));}
else {
    confirmNumber = confirm("Numbers?");
    confirmCharacter = confirm("speacial characters?");
    

}


}


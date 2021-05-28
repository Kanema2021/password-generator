
 let lowercase = "abcdefghijklmnopqrstuvwxyz";
 let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let number = "0123456789";
 let symbol = "!@#$%^&*_-+";


const charAmount = document.getElementById("numberOfChars");
const includeUppercaseElement = document.getElementById("uppercase");
const includeLowercaseElement = document.getElementById("lowercase");
const includeNumbersElement = document.getElementById("numbers");
const includeSymbolsElement = document.getElementById("symbols");
const password = document.getElementById("password");



generate.addEventListener("click", function(e){

    let characters = lowercase;
    (includeUppercaseElement.checked) ? characters += uppercase : "";
    (includeNumbersElement.checked) ? characters += number : "";
    (includeSymbolsElement.checked) ? characters += symbol : "";
    
    password.value = finalPassword(charAmount.value, characters);
});



function finalPassword(l,characters) {
    let yourPassword = " ";
    for (let i = 0; i < l; i++){
       yourPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return yourPassword;
    
    }

    
   
   

//Problem Statement
//You need to implement a function that checks if a given password meets specific strength criteria.
//1. The password must be at least 8 characters long.
//2. It must contain at least one uppercase letter (A-z ).
//3. It must contain at least one lowercase letter ( a-z ).
//4. It must contain at least one digit ( 0-9 ).
//5. It must contain at least one special character (e.g. !@#$%"8* ).
//Return "Strong" if the password meets all criteria, otherwise return "Weak".


//Constraints
//1.(1 <= length of password <= 1000)
//2. Password may contain any printable ASCII character.


function passwordStrengthChecker(password) {
    // write your logic here
    if (password.length < 8) return "Weak";
    let isUpper = false;
    let isLower = false;
    let isNumber = false;
    let isSpecial = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') isUpper = true;
        if (char >= 'a' && char <= 'a') isLower = true;
        if (char >= '0' && char <= '9') isNumber = true;
        if (/[^a-zA-Z0-9]/.test(char)) isSpecial = true;
    }

    if (isUpper && isLower && isNumber && isSpecial) {
        return 'Strong';
    } else {
        return 'Weak'
    }

}

console.log(passwordStrengthChecker("adrf24345@#$CEEF"));
console.log(passwordStrengthChecker("adrf24345CEEF"));
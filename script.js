document.addEventListener('DOMContentLoaded', function() {

    let condition1 = false;
    let condition2 = false;
    let condition3 = false;
    let condition4 = false;

    const cond1 = document.querySelector('#cond1');
    const cond2 = document.querySelector('#cond2');
    const cond3 = document.querySelector('#cond3');
    const cond4 = document.querySelector('#cond4');

    const checkButton = document.getElementById('Btn');
    const passwordInput = document.getElementsByClassName('textBox')[0];

    if (checkButton && passwordInput) {
        checkButton.addEventListener('click', function() {
            checkPasswordLength(passwordInput.value);
            specialCharacters(passwordInput.value);
            containsUppercase(passwordInput.value);
            hasNumbers(passwordInput.value);
            displayMsg(condition1, condition2, condition3, condition4)
        });

    } else {
        console.error("Button or password input not found");
    }

console.log(passwordInput.value)

    function checkPasswordLength(password) {
        if (password && password.length >= 12) {
            cond1.style.color = 'green';
            condition1 = true;
        } else {
            cond1.style.color = 'red';
            condition1 = false;
            console.log('Password should be at least 12 characters long');
        }
        
    }

    
    function specialCharacters(password) {
        const specialChars = ['$', '!', '@', '#', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
        
        let hasSpecialChar = specialChars.some(char => password.includes(char));
    
        if (hasSpecialChar) {
            cond2.style.color = 'green';
            condition2 = true;
        } else {
            cond2.style.color = 'red';
            condition2 = false;
            console.log('Password does not contain special characters');
        }
    }

    function containsUppercase(passwordInput){
        
        let hasUppercase = /[A-Z]/.test(passwordInput);

        if(hasUppercase) {
           cond3.style.color = 'green';
            condition3 = true;
    }
        else {
             cond3.style.color ='red';
             condition3 = false;
             console.log('Password should contain at least one uppercase letter');
        }

}

function hasNumbers(passwordInput){
    let hasnumbers = /[0-9]/g.test(passwordInput);

    if(hasnumbers){
        cond4.style.color = 'green';
        condition4 = true;
    }

    else{
        cond4.style.color ='red';
        condition4 = false;
        console.log('Password should contain at least one number');
    }
}

function displayMsg(condition1, condition2, condition3, condition4) {
    // Remove any existing message
    const existingMsg = document.querySelector('h1');
    if (existingMsg) {
        existingMsg.remove();
    }

    let msg = document.createElement('h1');
    if (condition1 && condition2 && condition3 && condition4) {
        msg.innerHTML = 'You Have a Strong Password';
    } else {
        msg.innerHTML = 'Your Password is Not Strong Enough';
    }
    document.body.appendChild(msg);
}

});
var form = document.querySelector('form');
var butn = document.getElementById('btn');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    var userName = document.getElementById('user');
    var password = document.getElementById('pass');
    
    var userInfo = {
        name: userName.value,
        pass: password.value
    }; 

    // Validate password
    var passwordValidation = validatePassword(userInfo.pass);

    if (passwordValidation.valid) {
        check(userInfo);
    } else {
        document.getElementById('para').innerHTML = passwordValidation.message;
    }
});

function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        return {
            valid: false,
            message: "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
        };
    }
    return {
        valid: true,
        message: ""
    };
}

butn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the default button click behavior (form submission)

    var userName = document.getElementById('user');
    var password = document.getElementById('pass');
    
    var userInfo = {
        name: userName.value,
        pass: password.value
    }; 

    // Validate password
    var passwordValidation = validatePassword(userInfo.pass);

    if (passwordValidation.valid) {
        check(userInfo);
    } else {
        document.getElementById('para').innerHTML = passwordValidation.message;
    }
});

function check(userInfo) {
    var passwordValidation = validatePassword(userInfo.pass);

    if (passwordValidation.valid) {
        document.getElementById('para').innerHTML = "WELCOME";
        // Allow the form to submit
        form.submit();
    } else {
        document.getElementById('para').innerHTML = "NOT REGISTERED";
    }
}


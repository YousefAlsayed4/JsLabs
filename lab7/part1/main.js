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

    check(userInfo);
});

function check(userInfo) {
    if (userInfo.name == 'admin' && userInfo.pass == '123') {
        document.getElementById('para').innerHTML = "WELCOME";
    } else {
        document.getElementById('para').innerHTML = "NOT REGISTERED";
    }
}

butn.addEventListener('click', function () {
 

    check(userInfo);
});





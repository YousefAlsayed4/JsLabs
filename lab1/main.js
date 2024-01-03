var firstName;
var secondName;
var age;  
var birthYear;

firstName = window.prompt("Enter your First Name");
secondName = window.prompt("Enter your Second Name");
birthYear = window.prompt("Enter your birthYear");

var FullName=confirm(`your full name is ${firstName} ${secondName}`);

if(FullName){
    window.alert("Thank you for confirming your full name!");
}
else{
    window.alert("Please make sure to enter your correct full name.");
}

calAge(birthYear);

function calAge(birthYear) {
    age = new Date().getFullYear();
    age = age - birthYear;
    return age;
}

console.log(age);
window.alert(`Welcome ${firstName} ${secondName}, your age is ${age}`);













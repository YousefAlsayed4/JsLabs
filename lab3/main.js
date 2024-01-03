
function getUsername() {
    // Get the value entered by the user
    var usernameValue = document.getElementById("demo").value;
    var passwordValue = document.getElementById("demo1").value;

    if(usernameValue ==="admin" && passwordValue==="421$$"){
        window.alert("Welcome login success");
    }
    else{
        alert("data entered wrong");
    }

}


function plus() {
    var num1= document.getElementById("fnum").value;
    var num2= document.getElementById("snum").value;
    var sum =Number(num1)+Number(num2)
   alert(sum);
}
function multi() {
    var num1= document.getElementById("fnum").value;
    var num2= document.getElementById("snum").value;
    var mul =Number(num1)*Number(num2)
   alert(mul);
}
function subtract() {
    var num1= document.getElementById("fnum").value;
    var num2= document.getElementById("snum").value;
    var sub =Number(num1)-Number(num2)
   alert(sub);
}
function division() {
    var num1= document.getElementById("fnum").value;
    var num2= document.getElementById("snum").value;
    var div =Number(num1)/Number(num2)
   alert(div);
}
while (true) {
    var age 
do {
  age  =window.prompt("Enter Your Age :");

  if (Number(age)<0) {
    window.alert("Enter positive Number please!")  
  }   
} while (Number(age)<0);
if (age ==null) {
    window.alert("user clicked on cancel")
break;    
}
if (age >= 1 && age <= 10) {
    window.alert("You are child"); 
    console.log(age)   
}
else if(age >= 11 && age <= 18){
window.alert("you are teenager");
console.log(age) 
}
else if(age >= 19 && age <= 50){
    window.alert("you are grown");
    console.log(age)   
    }
else {
        window.alert("you are Old");
        
        }
        console.log(age) 
}

/******************************************************************* */
let count=0;

let word=window.prompt("Enter string")

for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
        case 'a':
        case 'o':
        case 'u':
        case 'e':
        case 'i':
            count++;
            break;
    }
}
window.alert(count);


/**************************************************/
function Conv(time) {
    let period;
    if(time>=12 ){
        period='pm';
    }
    else{
       period='Am'
    }
    let hour = (time % 12) ; 
    return `${hour} ${period}`    
}















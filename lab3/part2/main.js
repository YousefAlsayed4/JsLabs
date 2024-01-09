
var contacts = [{
    name: "",
    phone: ""
}]
//add function
function addContact() {
var newContact = {};
newContact.name = prompt("enter contact name");
newContact.phone = prompt("enter contact phone");
contacts.push(newContact);
console.log(newContact.name + " " + newContact.phone);
}

function search() {
var contact = prompt("enter phone");
var flag = false;
if (contact != null ) {
    for (var i = 0; i < contacts.length; i++) {
        var currentContact = contacts[i];
        if (contact == currentContact.phone) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }
    if (flag == true) {
        alert("name is " + currentContact.name );
    } else {
        alert(`the contact doesn't exist`)
    }
}
}

while (!stop && operator != null && operator != ""){
var operator = prompt("what do you want (add,search,exit)");
var stop = false;
switch (operator) {
    case 'add':
        addContact();
        break;
    case 'search':
        searchForContact();
        break;
    case "exit":
        stop = true;
        break;
}
}

addContact();
search() ;

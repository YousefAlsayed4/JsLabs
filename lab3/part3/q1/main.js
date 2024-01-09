//1)Object.keys(obj)
const person = { name: 'John', age: 30, job: 'Engineer' };
const keysArray = Object.keys(person);
console.log(keysArray); 

//****************************************** */
//2)Object.values(obj):

const person1 = { name: 'John', age: 30, job: 'Engineer' };
const valuesArray = Object.values(person1);
console.log(valuesArray); 
//******************************************** */

//3)Object.entries(obj):
const person2 = { name: 'John', age: 30, job: 'Engineer' };
const entriesArray = Object.entries(person2);
console.log(entriesArray); 
/********************************* ***************/
//4)Object.assign(target, ...sources):
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); 

/**************************************** */
//5)Object.freeze(obj):
const person5 = { name: 'John', age: 30 };
Object.freeze(person5);
person.job = 'Engineer'; 
console.log(person5); 
/******************************** */

//6)Object.seal(obj):

const person6 = { name: 'John', age: 30 };
Object.seal(person6);
delete person6.age; 
console.log(person6);

/************************ */
//7)Object.is(obj1, obj2):

console.log(Object.is('hello', 'hello')); 
console.log(Object.is(5, '5')); 
/**************************** */

//8)Object.hasOwnProperty(prop):
const person8 = { name: 'John', age: 30 };
console.log(person8.hasOwnProperty('name')); 
console.log(person8.hasOwnProperty('job')); 
/******************************* */

//9)Object.entries(obj).length:

const person9 = { name: 'John', age: 30, job: 'Engineer' };
const count = Object.entries(person9).length;

/*************************************** */

//10)Object.create(proto, [propertiesObject]):
const personProto = { greet: function() { console.log('Hello!'); } };
const john = Object.create(personProto);
john.greet();
/***********************************************/
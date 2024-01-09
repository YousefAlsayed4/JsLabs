//1)push(element1, ..., elementN)

const fruits1 = ['apple', 'orange'];
const newLength1 = fruits1.push('banana', 'grape');
/***************************** */
//2)pop()


const fruits2 = ['apple', 'orange', 'banana'];
const removedElement2 = fruits2.pop();
/********************************* */


//3)shift()

const fruits3 = ['apple', 'orange', 'banana'];
const removedElement3 = fruits3.shift();

/*************************************** */


//4)unshift(element1, ..., elementN)
const fruits4 = ['orange', 'banana'];
const newLength4 = fruits4.unshift('apple', 'grape');

/****************************** */

//5)indexOf(element)

const fruits5 = ['apple', 'orange', 'banana'];
const index5 = fruits5.indexOf('orange');

/********************************** */

//6)lastIndexOf(element)
const fruits6 = ['apple', 'orange', 'banana', 'orange'];
const index6 = fruits6.lastIndexOf('orange');

/************************************* */
//7)slice(start, end)


const fruits7 = ['apple', 'orange', 'banana', 'grape'];
const slicedFruits7 = fruits7.slice(1, 3);

/****************************************** */
//8)splice(start, deleteCount, item1, ..., itemN)


const fruits8 = ['apple', 'orange', 'banana'];
fruits8.splice8(1, 1, 'grape', 'kiwi');

/*********************************** */
//9)concat(array1, array2, ..., arrayN)


const fruits9 = ['apple', 'orange'];
const moreFruits9 = ['banana', 'grape'];
const combinedFruits = fruits9.concat(moreFruits9);

/***************************************** */
//10)forEach(callback(element, index, array))

const fruits10 = ['apple', 'orange', 'banana'];
fruits10.forEach((fruit10, index) => {
  console.log(`Element at index ${index}: ${fruit}`);
});

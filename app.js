//  The ES5 .trim() method removes whitespace from both ends of a string and creates a new string.
// var myString = '  Some Tabs and Spaces      ';
// console.log(myString.length); // logs 28
// var myNewString = myString.trim(); // trim it
// console.log(myNewString); // logs 'Some Tabs and Spaces'
// console.log(myNewString.length); // logs 20
    
// Array
// console.log(Array.isArray([1,2,3])) //logs true

// Note: does not work on Array-like objects
// console.log(Array.isArray({length: 3, 0:1, 1:2, 2:3})) //logs false

// Array Methods
var myArray = [1, 2, 3];
// [].some()
// Check if one or more items in the array is bigger than or equal to 2
// var someMethod = myArray.some(function(value, valueIndex, wholeArray){ 
//     return value >= 8; 
// }); 

// [].every()

// Check if every item in the array is bigger than or equal to 2
// var everyMethod = myArray.every(function(value, valueIndex, wholeArray){ 
//     return value >= 2; 
// }); 

// [].filter()
// filter out any value in the array that is not bigger than or equal to 2
// var FilteredArray = myArray.filter(function(value, valueIndex, wholeArray){ 
//     return value >= 2; 
// });

// [].forEach()
// log to the console each value, valueIndex, and wholeArray passed to the function
// myArray.forEach(function(item){
//     console.log(item)
// })

// [].indexOf()
// console.log(myArray.indexOf(1))

// [].lastIndexOf()
console.log(myArray.lastIndexOf(2));


    
    



// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

// Q3) Write a simple arrow function that squares a number.

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.





//--------------------------------------

//1

// const greet = (name) => {
//     console.log (`Hello ${name}`);
// }

// greet("Moodhy!");

    // const greet (name) => `Hello, ${name}`

//--------------------------------------

//2

// const totalSum = (a, b) => {
// console.log (a + b);
// }

// totalSum(1,2);

    const totalSum = (a,b) => a+b;

//--------------------------------------

//3
    const numSquare = (num) => num*num  //or num**2

    console.log (numSquare(4));

//--------------------------------------

//4

    // const array = [1, 2, 3];


    // const squareArray = (array) => {

    //     const newArray = [];

    // for (counter = 0; counter<array.length; counter++){
    // newArray[counter]= array[counter]*array[counter];
    // }

    // return newArray

    // }

    // console.log (squareArray(array));


    const numbers = [1, 2, 3, 4];
    
    const squareArray = (arr) => {

        let newArray = [];
        for(counter=0;counter<arr.lengt;counter++){
            newArray.push(arr[counter]**2);
            //newArray.push(squareNumber(arr[counter]))
            //squareArray(numbers)

            // arr: [1,2,3,4] ---> counter: 0, arr[0]: 1, arr[0]**2: 1, newArray: [1]
        }
return newArray;
    };

  squareArray([1, 2, 3, 4]);

  //--------------------------


  

//Iterations.js

// function printIt(n) {
//     console.log(n);
// }

// const Allrests = ["a","b", "c"];

// Allrests.forEach(printIt);

// //or short cut


// const numbers = [1, 2, 3, 4];

// function squareIt(m) {
//     return m*m;
// }

// const squared = numbers.map(squareIt);




// const names = ["mohammed", "ahmed", "bashayer"]

// function addDeveloper(x){
//     return `Developer: ${x}`
// }

// const newNames = names.map(addevelopper);
// console.log(newNames);







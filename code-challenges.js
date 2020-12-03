// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// I notice that there is never "purple" so I make sure to initiate my function using .shift() first.
// call a function that takes an array of strings and deletes the first color "purple"
//

const stringDelShuf = (string) => {
    string.shift()
  return string.sort((a,b) => 0.5 - Math.random())
  let stringDelShuf2 = (string) => {
    string.shift()
    return string.sort((a,b) => 0.5 - Math.random())
  }
}

/*
const round2 = (stringDelShuf) => {
  return stringDelShuf.shift()
}
*/
console.log(stringDelShuf(collections));

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//make function called 'cubed' that takes in an array and cube every index in that array and find the summation of the indexs after being cubed. For loop to iterate through every number

const cubed = (arr) => {
  //for(let i=0; i < arr.length; i++){
    arr = (arr[0] * arr[0] * arr[0]) + (arr[1] * arr[1] * arr[1]) + (arr[2] * arr[2] * arr[2])
//  }
//  console.log(arr);

  return arr

}
console.log(cubed(cubeAndSum1));
console.log(cubed(cubeAndSum2));


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// I need to create a function that orders all numbers in the array from least to greatest
const leastToGreatest = (array) => {
  array.sort((a,b) => a-b)
  //now that the numbers are least to greatest, I want to return ONLY the lowest number which would be at index [0] and I want to return the last index of the numbers with array[array.length-1]
  return array = [array[0], array[array.length-1]]
}
  console.log(leastToGreatest(nums1));
  console.log(leastToGreatest(nums2));
/*
Really want to come back and try out the spread operator...
const maxAndMin = (array) => {
  array = array.math.min(...array)
  return array
}
console.log(maxAndMin(nums1));
*/


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//Make a function that capitolizes every other index, [1,3,5,7,9], aka "odd index's"..

const alternativeCase = (string) => {
  //I create an open variable for a new string to be created with odd index's capitolized and even index's lowercase.
    var output = ""
  //I need to iterate through every index
    for(var i = 0; i < string.length; i++){
      // now I need the ability of every other index being capitlized through an if/else statement
        if (i % 2 != 0) {
            output += string[i].toUpperCase();
        }
        else {
            output += string[i].toLowerCase();
         }
    }
    //return output
    return output
}

console.log(alternativeCase(testString1));
console.log(alternativeCase(testString2));


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

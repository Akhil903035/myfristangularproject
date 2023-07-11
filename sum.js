// sum.js
function sumOfNumbers(array) {
    return array.reduce((a, b) => a + b, 0);
}

// Testing the function
console.log(sumOfNumbers([1, 2, 3, 4]));  // Output: 10
console.log(sumOfNumbers([-1, -2, 3, 4])); // Output: 4

/*

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first 
ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one
hundred natural numbers and the square of the sum.

*/

function sumOfSquares(numbers){
    return numbers.reduce((acc, cur) => acc + cur*cur);
}

function squareOfSum(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum*sum
}

function difference(limit){
    let naturals = [];
    for(i = 0; i <= limit; i++){
        naturals.push(i)
    }

    return squareOfSum(naturals) - sumOfSquares(naturals)
}

console.log(difference(100));
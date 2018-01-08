/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.
What is the 10 001st prime number?

*/

const helpers = require('./helpers')

function getPrimeNumberFromIndex(index){
    const primeNumbers = helpers.getPrimeNumbers(1000000)
    return primeNumbers[index-1]
}

console.log(getPrimeNumberFromIndex(10001))

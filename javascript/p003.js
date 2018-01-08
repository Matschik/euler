/*

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

*/

const helpers = require('./helpers')

function largestPrimeFactor(nb) {
    let largest;
    let primeNumbers = helpers.getPrimeNumbers(10000);
    const lastPrime = primeNumbers[primeNumbers.length - 1];

    for(i = lastPrime; i > 0; i--) {
        if(nb  % primeNumbers[i] === 0){
            largest = primeNumbers[i];
            break;
        }
    }

    return largest;
}


const testNumber = 13195;
const number = 600851475143;
console.time('Time');
console.log('Test: ' + largestPrimeFactor(testNumber));
console.log('Answer: ' + largestPrimeFactor(number));
console.timeEnd('Time');

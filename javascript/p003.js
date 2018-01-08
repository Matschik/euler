/*

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

*/


function isPrime(n) {

    if(n <= 1) {
        return false
    } else if(n <= 3) {
        return true;
    } else if(n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    let i = 5;
    while(i*i <= n) {
        if(n % i === 0 || n % (i+2) === 0) {
            return false;
        }
        i = i + 6;
    }

    return true;
}


function getPrimeNumbers(limit) {
    let primeNumbers = [];

    for(i = 0; i < 10000; i++) {
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

function largestPrimeFactor(nb) {
    let largest;
    let primeNumbers = getPrimeNumbers(nb);
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

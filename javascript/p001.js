/*
If we list all the natural numbers below 10 that are 
multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumMultiplesOf3And5(nbLimit) {
    let total
    let numbers = []
    for(i = 1; i < nbLimit; i++) {
        numbers.push(i)
    }

    numbers = numbers.filter((x) => x%3 === 0 || x%5 === 0)

    total = numbers.reduce((total, cur) => total + cur)

    return total
}

console.log('Test with 10: ' + sumMultiplesOf3And5(10));
console.log('Answer with 1000: ' + sumMultiplesOf3And5(1000));

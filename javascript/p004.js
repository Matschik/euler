/*

A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.

*/


function isNumberPalindrome(nb) {

    if(typeof(nb) !== 'number'){
        throw new TypeError('nb must be a number')
    }

    nb = nb.toString()
    const reverse = nb.split('').reverse().join('')
    
    if(nb !== reverse){
        return false
    }

    return true;
}

function largestPalindromeFromProduct3Digits() {
    let product;
    let largest = 0;

    for(firstNb = 100; firstNb <= 999; firstNb++) {
        for(secondNb = 100; secondNb <= 999; secondNb++) {
            product = firstNb * secondNb;
            if(isNumberPalindrome(product) && product > largest) {
                largest = product;
            }
        }
    }

    return largest;
}

console.log(largestPalindromeFromProduct3Digits());

/*

2520 is the smallest number that can be divided by each of 
the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20?

*/


function smallestDivisible() {
    let smallest = 0;
    let isDivisible = false;

    while(!isDivisible){
        smallest++;
        for(let i = 1; i <= 20; i++) {
            if(smallest % i === 0){
                isDivisible = true;
            } else {
                isDivisible = false;
                break;
            }
        }
    }
    
    return smallest;
}

console.log('Answer: ' + smallestDivisible());

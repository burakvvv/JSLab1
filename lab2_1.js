let a = prompt('enter a number');
a = Number(a);

let b = prompt('enter a number');
b = Number(b);

function isInteger(a, b) {
    if (a % 1 === 0 || b % 1 === 0) {
        console.log('true');
    } else console.log('false');
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    } 
    return true;
}


function findPrimes(a, b) {
    for (let i = a; i <= b; i++) {
        if( isPrime(i) )
        console.log(i);
    }
}

findPrimes(a, b);
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Example
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

Note for Forth
Return only the first backwards-read prime between start and end or 0 if you don't find any

backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

https://www.codewars.com/kata/5539fecef69c483c5a000015/train/javascript


function backwardsPrime(start, stop) {

    let arr = [];

    for (let i = start; i <= stop; i++) {
        let backwardNumber = reverseNumber(i);
        if (isPrime(i) && isPrime(backwardNumber) && i != backwardNumber)
            arr.push(i);
    }
    return arr;
}

function reverseNumber(number) {
    return number.toString().split("").reverse().join("");
}

function isPrime(number) {

    if (number % 2 === 0 || number < 2) {
        return false;
    }
    for (let i = 3, s = Math.sqrt(number); i <= s; i += 2) {

        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

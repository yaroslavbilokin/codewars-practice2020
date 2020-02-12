Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript

function superSize(num) {
    let result = num.toString()
        .split('')
        .sort(function (a, b) {
            return b - a;
        })
        .join('')
    return Number(result);
}

//

const superSize = num => Number(num.toString().split('').sort((a,b) => b - a).join(''));

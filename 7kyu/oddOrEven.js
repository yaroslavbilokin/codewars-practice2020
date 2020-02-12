Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"
Have fun!

https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
    if (array.length == 0) {
        return 'even';
    } else {
        let sum = array.reduce((a, b) => a + b);
        return result = sum % 2 == 0 ? 'even' : 'odd';
    }
}

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

function removeDuplicateWords(s) {
    let wordsArr = s.split(' ');
    let removeWords = wordsArr.filter(function (value, index, self) {
        return self.indexOf(value.trim()) == index;
    })
    return removeWords.join(' ');
}


// Short Solution

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');

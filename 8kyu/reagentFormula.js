Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript

const isValid = a => !(a.includes(1) && a.includes(2)) &&
                    !(a.includes(3) && a.includes(4)) &&
                    a.includes(5) === a.includes(6) && 
                    (a.includes(7) || a.includes(8));

https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

const makeNegative = num => num > 0 ? Number('-'+String(num)) : num;

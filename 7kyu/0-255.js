Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.



https://www.codewars.com/kata/567e8f7b4096f2b4b1000005/train/javascript

String.prototype.eightBitNumber = function () {
    return String(Number(this)) == this && this >= 0 && this < 256;
}

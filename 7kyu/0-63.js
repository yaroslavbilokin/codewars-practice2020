Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.


https://www.codewars.com/kata/567e8dbb9b6f4da558000030/train/javascript


String.prototype.sixBitNumber = function() {
  return String(Number(this)) == this && this >=0 && this < 64;
}

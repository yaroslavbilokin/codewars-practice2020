https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

function addLetters(...letters) {
    return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
}

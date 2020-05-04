// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

//

function abbrevName(name){
  let nameArr = name.split(' ');
  let result = [];
  for (let i = 0; i < nameArr.length; i++) {
    result.push(nameArr[i][0].toUpperCase());
  }
  return result.join('.');
}

//

const abbrevName = (name) => {
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

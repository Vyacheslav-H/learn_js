/* eslint-disable radix */
/* eslint-disable no-array-constructor */
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function,
// 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  const number = `${num}`;
  const nNum = new Array();
  number.split('').map((n) => {
    nNum.push(n ** 2);
    return n;
  });

  return parseInt(nNum.join(''));
}

//   function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   } (это мне на заметку)

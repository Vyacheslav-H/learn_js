/* eslint-disable no-param-reassign */
// Triangular numbers are so called because of the equilateral
// triangular shape that they occupy when laid out as dots. i.e.
// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// Return the nth triangular number
function triangular(n) {
  let res = 0;
  while (n > 0) {
    res += n;
    n--;
  }
  return res;
}

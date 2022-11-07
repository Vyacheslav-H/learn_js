// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A) {
  const circleLength = (A * 4);
  const r = (circleLength / (Math.PI * 2));
  const S = (r * r);
  return (Math.round(parseFloat(S) * 100) / 100);
  // return (Math.floor (S * Math.pow(10, 2)) / Math.pow(10, 2));
}

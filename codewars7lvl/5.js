function getSum(a, b) {
  let res = 0;
  if (a === b) return a;
  if (a < b) {
    for (; a <= b; a++) {
      res += a;
    }
  } else if (a > b) {
    for (; b <= a; b++) {
      res += b;
    }
  }
  return res;
}

// Given a non-negative integer n, write a function to_binary/ToBinary
// which returns that number in a binary format.
function toBinary(n) {
  // eslint-disable-next-line no-bitwise
  const res = (n >>> 0).toString(2);
  return parseInt(res, 10);
}

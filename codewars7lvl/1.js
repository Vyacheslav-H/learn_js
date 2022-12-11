// An infinite number of shelves are arranged one above the other in a staggered fashion
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf
// 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration
function solution(start, finish) {
  const dif = finish - start;
  return (Math.floor(dif / 3) + (dif % 3));
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  n = Array.from(n.toString(), Number)
  for (let i = 1; i < n.length; i++) {
    let temp = n[i];
    for (var j = i - 1; j >= 0 && (n[j] < temp); j--) {
      n[j + 1] = n[j];
    }
    n[j + 1] = temp;
  }
  return Number(n.join(''));
}
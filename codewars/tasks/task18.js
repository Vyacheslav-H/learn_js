// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let sSplit = s.split(" ");
    let minWord = sSplit.sort(function(a, b) { 
    return a.length - b.length;
  });
    return minWord[0].length;
  }
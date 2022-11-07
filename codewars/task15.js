// Complete the function that accepts a string parameter,
// and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  let revWord = '';
  let revStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      revWord = str[i] + revWord;
    } else {
      revStr += `${revWord} `;
      revWord = '';
    }
  }
  return revStr + revWord;
}

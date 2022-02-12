/**
 * Hackerrank Challenge - Encryption
 */

//	 https://www.hackerrank.com/challenges/encryption/problem

const encryption = (s: string): string => {
  const text = s.split(' ').join('');
  const len = text.length;
  const srqt = Math.sqrt(len);
  const cols = Math.ceil(srqt);
  const rows = Math.floor(srqt) * cols < len ? Math.floor(srqt) + 1 : Math.floor(srqt);
  const encryptedArray: string[] = [];

  for (let i = 0; i < cols; i++) {
    let line = '';
    for (let n = 0; n < rows; n++) line += text.substring(n * cols + i, n * cols + i + 1);
    encryptedArray.push(line);
  }
  return encryptedArray.join(' ');
};

console.log(encryption('if man was meant to stay on the ground god would have given us roots'));
console.log(encryption('have a nice day'));
console.log(encryption('feed the dog'));
console.log(encryption('chill out'));

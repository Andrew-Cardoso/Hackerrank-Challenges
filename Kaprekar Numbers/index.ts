/**
 * Hackerrank Challenge - Kaprekar Numbers
 */

//	 https://www.hackerrank.com/challenges/kaprekar-numbers/problem

const kaprekarNumbers = (p: number, q: number): number[] | string => {
  const response: number[] = [];
  for (let n = p; n <= q; n++) {
    const squareStr = `${Math.pow(n, 2)}`;
    const squareSum = +squareStr.substring(0, Math.floor(squareStr.length / 2)) + +squareStr.substring(Math.floor(squareStr.length / 2));
    if (squareSum === n) response.push(n);
  }
  const result = response.length > 0 ? response.join(' ') : 'INVALID RANGE';
  console.log(result);
  return result;
};
console.log(kaprekarNumbers(1, 10000));

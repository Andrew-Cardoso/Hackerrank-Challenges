/**
 * Hackerrank Challenge - Extra Long Factorials
 */

//	 https://www.hackerrank.com/challenges/extra-long-factorials/problem

const extraLongFactorials = (n: number): string => {
  let result = BigInt(n);
  for (let i = n - 1; i > 0; i--) result *= BigInt(i);
  console.log(result.toString());
  return result.toString();
};

extraLongFactorials(30);
extraLongFactorials(25);

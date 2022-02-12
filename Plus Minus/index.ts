/**
 * Hackerrank Challenge - Plus Minus
 */

//	 https://www.hackerrank.com/challenges/plus-minus/problem

const plusMinus = (arr: number[]): string => {
  const nCount = arr.reduce(
    (count: number[], n: number) => {
      if (n > 0) count[0]++;
      if (n < 0) count[1]++;
      if (n === 0) count[2]++;
      return count;
    },
    [0, 0, 0]
  );
  const result = nCount.map((count: number) => (count / arr.length).toFixed(6)).join('\n');
  console.log(result);
  return result;
};
plusMinus([1, 2, 3, 4]);
plusMinus([-4, 3, -9, 0, 4, 1]);

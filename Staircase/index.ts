/**
 * Hackerrank Challenge - Staircase
 */

//	 https://www.hackerrank.com/challenges/staircase/problem

const staircase = (n: number): string => {
  const staircaseHashs: string[] = [];
  for (; staircaseHashs.length < n; staircaseHashs.push(' '.repeat(n - staircaseHashs.length - 1) + '#'.repeat(staircaseHashs.length + 1)));
  const result = staircaseHashs.join('\n');
  console.log(result);
  return result;
};
console.log(staircase(6));

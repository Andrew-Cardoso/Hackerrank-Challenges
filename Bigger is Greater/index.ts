/**
 * Hackerrank Challenge - Bigger is Greater
 */

//	 https://www.hackerrank.com/challenges/bigger-is-greater/problem

const smallerThanPrevious = (word: string[]): boolean => {
  const first = word[0];
  for (let i = 1; i < word.length; i++) if (first.localeCompare(word[i]) === -1) return true;
  return false;
};
const getNextLetter = (word: string[]): string => {
  const first = word[0];
  for (const letter of word.sort((a, b) => a.localeCompare(b))) if (letter.localeCompare(first) === 1) return letter;
  return '';
};
const sort = (word: string[], end: number): string => {
  for (let i = end - 1; i >= 0; i--) {
    const splicedWord = word.slice(i, end);
    if (smallerThanPrevious(splicedWord)) {
      const nextLetter = getNextLetter(splicedWord);
      word[i] = nextLetter;
      splicedWord[splicedWord.findIndex((l) => l === nextLetter)] = splicedWord[0];
      return [...word.slice(0, i + 1), ...splicedWord.slice(1).sort((a, b) => a.localeCompare(b))].join('');
    }
  }
  return 'no answer';
};
const biggerIsGreater = (w: string): string => {
  const response: string[] = [];
  w.split(' ').forEach((word) => response.push(sort(word.split(''), word.length)));
  return response.join('\n');
};
console.log(biggerIsGreater(`lmno dcba dcbb abdc abcd`));

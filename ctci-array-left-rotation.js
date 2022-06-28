// a is an array of numbers
// d is the number of rotations
const rotLeft = (a, d) => {
  const len = a.length;
  const diff = d % len;
  return diff ? [...a.slice(diff), ...a.slice(0, diff)] : a
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))
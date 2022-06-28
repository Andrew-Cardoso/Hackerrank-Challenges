const hourglassSum = (arr) => {
  let maxSum = Number.MIN_SAFE_INTEGER;

  const len = arr.length - 2;
  for (let y = 0; y < len; y++) {
    const firstRow = arr[y];
    const middleRow = arr[y + 1];
    const lastRow = arr[y + 2];


    for (let x = 0; x < len; x++) {
      const values = [
        ...firstRow.slice(x, x + 3),
        ...lastRow.slice(x, x + 3),
        middleRow[x + 1]
      ];
      const hourglassValue = values.reduce((a, b) => a + b, 0);
      hourglassValue > maxSum && (maxSum = hourglassValue);
    }
  }
  return maxSum;
}


console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]));


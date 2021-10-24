var maximalRectangle = function (matrix) {
  const row = matrix.length;
  if (row < 1) {
    return 0;
  }
  const col = matrix[0].length;

  let result = 0;
  let dp = [];

  for (let i = 0; i < row; i++) {
    dp.push(Array(col).fill(0));

    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '0') {
        dp[i][j] = 0;
      } else {
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;
      }

      let k = i;
      let w = j + 1;
      while (k >= 0 && dp[k][j] !== 0) {
        w = Math.min(w, dp[k][j]);
        result = Math.max(result, w * (i - k + 1));
        k--;
      }
    }
  }

  return result;
};

const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];
const result = maximalRectangle(matrix);
console.log(`result >>> ${result}`);

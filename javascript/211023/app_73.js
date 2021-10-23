var setZeroes = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let arr = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        arr.push([i, j]);
      }
    }
  }

  for (let change of arr) {
    helper(change);
  }

  function helper(change) {
    let [r, c] = change;

    for (let i = 0; i < row; i++) {
      matrix[i][c] = 0;
    }

    for (let i = 0; i < col; i++) {
      matrix[r][i] = 0;
    }
  }

  console.log(matrix);
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

const result = setZeroes(matrix);
console.log(`result >>> ${result}`);

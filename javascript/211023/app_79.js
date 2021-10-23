var search = function (board, word, row, col, idx) {
  if (idx === word.length) return true;
  if (row < 0 || row >= board.length || col < 0 || col >= board[row].length)
    return false;

  if (word[idx] === board[row][col]) {
    board[row][col] = '#';

    if (
      search(board, word, row + 1, col, idx + 1) ||
      search(board, word, row - 1, col, idx + 1) ||
      search(board, word, row, col + 1, idx + 1) ||
      search(board, word, row, col - 1, idx + 1)
    )
      return true;

    board[row][col] = word[idx];
  }

  return false;
};

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (search(board, word, i, j, 0)) return true;
    }
  }

  return false;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';

const result = exist(board, word);
console.log(`result >>> ${result}`);

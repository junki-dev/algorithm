var minDistance = function (word1, word2) {
  let table = [...Array(word1.length + 1)].map(() => Array(word2.length + 1));
  for (let i = 0; i <= word1.length; i++) {
    table[i][0] = i;
  }
  for (let i = 0; i <= word2.length; i++) {
    table[0][i] = i;
  }

  console.log(table);
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] = Math.min(
          table[i - 1][j] + 1,
          table[i][j - 1] + 1,
          table[i - 1][j - 1] + 1,
        );
      }
    }
  }

  return table[word1.length][word2.length];
};

const word1 = 'horse';
const word2 = 'ros';

const result = minDistance(word1, word2);
console.log(`result >>> ${result}`);

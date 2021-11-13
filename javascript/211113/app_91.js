var numDecodings = function (s) {
  const len = s.length;
  if (len === 0) return 0;

  const dp = new Array(len + 1);

  dp[len] = 1;
  dp[len - 1] = s[len - 1] === '0' ? 0 : 1;

  console.log(parseInt(s.slice(0, 1)));
  for (let i = len - 2; i >= 0; i--) {
    if (s[i] === '0') {
      dp[i] = 0;
    } else if (parseInt(s.slice(i, i + 2)) < 27) {
      dp[i] = dp[i + 1] + dp[i + 2];
    } else {
      dp[i] = dp[i + 1];
    }
  }

  return dp[0];
};

const s = '27';
const result = numDecodings(s);
console.log(`result >>> ${result}`);

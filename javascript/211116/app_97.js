var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  let isValid = new Array(s1.length + 1);
  for (let i = 0; i < isValid.length; i++) {
    isValid[i] = new Array(s2.length + 1);
  }

  for (let i = 0; i < s1.length + 1; i++) {
    for (let j = 0; j < s2.length + 1; j++) {
      if (i === 0 && j === 0) {
        isValid[i][j] = true;
      } else if (i === 0) {
        isValid[i][j] = isValid[i][j - 1] && s2[j - 1] == s3[i + j - 1];
      } else if (j === 0) {
        isValid[i][j] = isValid[i - 1][j] && s1[i - 1] == s3[i + j - 1];
      } else {
        isValid[i][j] =
          (isValid[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (isValid[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
      }
    }
  }

  return isValid[s1.length][s2.length];
};

export default isInterleave;

var isScramble = function (s1, s2) {
  if (s1.length != s2.length) return false;
  if (s1 == s2) return true;
  if (s1.length == 0 || s2.length == 0) return true;

  var xorFW = 0;
  var xorBW = 0;

  for (var i = 0, j = s1.length - 1; i < s1.length; i++, j--) {
    xorFW ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
    xorBW ^= s1.charCodeAt(i) ^ s2.charCodeAt(j);

    if (xorFW == 0 && i < s1.length - 1) {
      if (
        isScramble(s1.substring(0, i + 1), s2.substring(0, i + 1)) &&
        isScramble(s1.substring(i + 1), s2.substring(i + 1))
      )
        return true;
    }

    if (xorBW == 0 && i < s1.length - 1) {
      if (
        isScramble(s1.substring(0, i + 1), s2.substring(s1.length - i - 1)) &&
        isScramble(s1.substring(i + 1), s2.substring(0, s1.length - i - 1))
      )
        return true;
    }
  }

  return false;
};

const s1 = 'great';
const s2 = 'rgeat';
const result = isScramble(s1, s2);
console.log(`result >>> ${result}`);

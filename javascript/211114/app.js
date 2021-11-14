const allCase = (tmp, s, result) => {
  if (tmp.length === 4) {
    if (s === '') result.push(tmp.join('.'));
    return;
  }

  for (let i = 1; i <= 3; i++) {
    if (s.length >= i) {
      const ipPart = s.slice(0, i);
      const ipPartVal = parseInt(ipPart);
      if (ipPartVal >= 0 && ipPartVal <= 255 && ipPart === ipPartVal.toString()) {
        allCase([...tmp, ipPartVal], s.slice(i), result);
      }
    }
  }
};

var restoreIpAddresses = function (s) {
  const result = [];
  if (s.length < 4) return result;
  allCase([], s, result);
  return result;
};

const s = '25525511135';
const result = restoreIpAddresses(s);
console.log(result);

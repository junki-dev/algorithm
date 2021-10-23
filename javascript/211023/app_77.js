var combine = function (n, k) {
  const result = [];

  const helper = (idx, arr) => {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }

    for (let i = idx; i < n + 1; i++) {
      arr.push(i);
      helper(i + 1, arr);
      arr.pop(i);
    }
  };

  helper(1, []);
  return result;
};

const n = 4;
const k = 2;

const result = combine(n, k);
console.log(`result >>> ${result}`);

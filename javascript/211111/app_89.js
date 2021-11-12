var grayCode = function (n) {
  const arr = [];
  const stack = [];
  arr.push(0);

  let i = 0;
  while (i < n) {
    let len = arr.length;
    let square = 2 ** i;

    for (let j = 0; j < len; j++) {
      stack.push(arr[j]);
    }

    while (stack.length > 0) {
      arr.push(stack.pop() + square);
    }

    i++;
  }

  return arr;
};

const n = 2;
const result = grayCode(n);
console.log(`result >>> ${result}`);

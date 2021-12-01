function bigNumber(number, k) {
  const stack = [];
  let result = '';

  for (let i = 0; i < number.length; i++) {
    let now = number[i];

    while (k > 0 && now > stack[stack.length - 1]) {
      stack.pop();
      k--;
    }

    stack.push(now);
  }

  stack.splice(stack.length - k, k);
  return stack.join('');
}

export default bigNumber;

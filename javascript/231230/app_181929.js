function solution(num_list) {
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  const mul = num_list.reduce((acc, cur) => acc * cur, 1);

  return mul < sum * sum ? 1 : 0;
}

console.log(`solution >>> ${solution([3, 4, 5, 2, 1])}`);
console.log(`solution >>> ${solution([[5, 7, 8, 3]])}`);

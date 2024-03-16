function solution(num_list) {
  let odd = '';
  let even = '';

  for (const num of num_list) {
    if (num % 2 === 0) {
      odd += num;
    } else {
      even += num;
    }
  }

  return parseInt(odd) + parseInt(even);
}

console.log(`solution >>> ${solution([3, 4, 5, 2, 1])}`);
// console.log(`solution >>> ${solution([[5, 7, 8, 3]])}`);

function boat(people, limit) {
  let count = 0;

  people.sort(function (a, b) {
    return b - a;
  });

  let l = 0;
  let r = people.length - 1;
  while (l < r) {
    let total = people[l] + people[r];
    if (total > limit) {
      l++;
    } else {
      l++;
      r--;
    }

    count++;
  }

  if (l === r) count++;

  return count;
}

export default boat;

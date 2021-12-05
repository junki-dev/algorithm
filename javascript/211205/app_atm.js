function bj11399(input) {
  const n = input[0];
  const people = input[1].split(' ').map((e) => parseInt(e, 10));
  people.sort();

  let sum = 0;
  const time = [];

  people.forEach((element) => {
    sum += element;
    time.push(sum);
  });

  return time.reduce((prev, cur) => prev + cur);
}

export default bj11399;

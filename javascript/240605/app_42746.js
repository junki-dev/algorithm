// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const maxDigits = Math.max(...numbers).toString().length;

  numbers = numbers.sort((a, b) => {
    const aStr = a.toString();
    const bStr = b.toString();

    return bStr + aStr - (aStr + bStr);
  });

  return Number(numbers[0]) === 0 ? "0" : numbers.join("");
}

const result = solution([979, 97, 978, 81, 818, 817]);
console.log(`>>> result = ${result}`);

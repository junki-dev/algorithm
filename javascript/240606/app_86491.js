// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(answers) {
  const correct = [0, 0, 0];
  const aAnswer = [1, 2, 3, 4, 5];
  const bAnswer = [2, 1, 2, 3, 2, 4, 2, 5];
  const cAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (aAnswer[i % aAnswer.length] === answers[i]) {
      correct[0]++;
    }

    if (bAnswer[i % bAnswer.length] === answers[i]) {
      correct[1]++;
    }

    if (cAnswer[i % cAnswer.length] === answers[i]) {
      correct[2]++;
    }
  }

  const max = Math.max(...correct);
  const answer = [];

  correct.forEach((c, idx) => c === max && answer.push(idx + 1));

  return answer;
}

const result = solution([1, 2, 3, 4, 5]);
// const result = solution([1, 3, 2, 4, 2]);
console.log(`>>> result = ${result}`);

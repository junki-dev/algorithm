// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const answer = [];
  const splitedS = s
    .split("},{")
    .map((splitedS) => splitedS.replace(/{|}/g, ""));

  splitedS.sort((a, b) => a.length - b.length);

  for (const splited of splitedS) {
    if (answer.length < 1) {
      answer.push(Number(splited));
    } else {
      const splitStr = splited.split(",");
      for (const str of splitStr) {
        if (answer.includes(Number(str))) {
          continue;
        }

        answer.push(Number(str));
      }
    }
  }

  return answer;
}

const result = solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");
console.log(`>>> result = ${result}`);

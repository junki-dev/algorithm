// https://school.programmers.co.kr/learn/courses/30/lessons/17680#

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  cities = cities.map((city) => city.toLowerCase());

  cities.forEach((city) => {
    if (!cache.includes(city)) {
      cache.push(city);

      if (cache.length > cacheSize) {
        cache.shift();
      }

      answer += 5;
    } else {
      cache = cache.filter((c) => c !== city);
      cache.push(city);

      answer += 1;
    }
  });

  return answer;
}

const result = solution(3, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
]);
console.log(`>>> result = ${result}`);

const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

function bj1700(input) {
  let [N, K] = strToNumArr(input.shift());
  let uses = strToNumArr(input.shift());
  let plug = [];
  let count = 0;

  for (let i = 0; i < K; i++) {
    // 플러그에 꽂혀 있는 경우
    if (plug.indexOf(uses[i]) > -1) {
      continue;
    }

    if (plug.length < N) {
      plug.push(uses[i]);
    } else {
      let tmpUses = uses.slice(i);
      let maxIdx = -1;
      let maxVal = plug[0];
      for (let j = 0; j < plug.length; j++) {
        // 이후에 사용되지 않음
        const curIdx = tmpUses.indexOf(plug[j]);

        if (curIdx < 0) {
          plug.splice(j, 1);
          count++;
          break;
        }

        if (curIdx > maxIdx) {
          maxIdx = curIdx;
          maxVal = j;
        }
      }

      if (plug.length === N) {
        plug.splice(maxVal, 1);
        count++;
      }

      plug.push(uses[i]);
    }
  }

  return count;
}

export default bj1700;

/** 제출 */
// let input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let [N, K] = strToNumArr(input.shift());
//     let uses = strToNumArr(input.shift());
//     let plug = [];
//     let count = 0;

//     for (let i = 0; i < K; i++) {
//       // 플러그에 꽂혀 있는 경우
//       if (plug.indexOf(uses[i]) > -1) {
//         continue;
//       }

//       if (plug.length < N) {
//         plug.push(uses[i]);
//       } else {
//         let tmpUses = uses.slice(i);
//         let maxIdx = -1;
//         let maxVal = plug[0];
//         for (let j = 0; j < plug.length; j++) {
//           // 이후에 사용되지 않음
//           const curIdx = tmpUses.indexOf(plug[j]);

//           if (curIdx < 0) {
//             plug.splice(j, 1);
//             count++;
//             break;
//           }

//           if (curIdx > maxIdx) {
//             maxIdx = curIdx;
//             maxVal = j;
//           }
//         }

//         if (plug.length === N) {
//           plug.splice(maxVal, 1);
//           count++;
//         }

//         plug.push(uses[i]);
//       }
//     }

//     console.log(count);
//   });

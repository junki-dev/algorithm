const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));
function bj1715(input) {
  const minHeap = new MinHeap();
  for (let i = 0; i < input.length; i++) {
    minHeap.push(+input[i]);
  }

  let totalCompareCount = 0;
  while (minHeap.getLength() > 1) {
    let aCount = minHeap.pop();
    let bCount = minHeap.pop();
    let compareCount = aCount + bCount;
    totalCompareCount += compareCount;
    minHeap.push(compareCount);
  }

  return totalCompareCount;
}

export default bj1715;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength = () => {
    return this.heap.length;
  };

  push = (node) => {
    this.heap.push(node);
    let i = this.heap.length - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[parentI] > this.heap[i]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * 2 + 2;
      if (leftI >= this.heap.size) {
        break;
      }
      let nextI = i;
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }
      if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
        nextI = rightI;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };

  swap = (a, b) => {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
}

/** 제출 */
// const input = [];

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     const minHeap = new MinHeap();
//     for (let i = 1; i < input.length; i++) {
//       minHeap.push(+input[i]);
//     }

//     let totalCompareCount = 0;
//     while (minHeap.getLength() > 1) {
//       let aCount = minHeap.pop();
//       let bCount = minHeap.pop();
//       let compareCount = aCount + bCount;
//       totalCompareCount += compareCount;
//       minHeap.push(compareCount);
//     }
//     console.log(totalCompareCount);
//   });

/** 시간 초과 */
// const input = [];
// const strToNumArr = (str) => str.split(' ').map((numString) => Number(numString));

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (line) {
//     input.push(line.trim());
//   })
//   .on('close', function () {
//     let N = strToNumArr(input.shift());
//     const cards = input.map((str) => strToNumArr(str)).sort((a, b) => a - b);
//     let result = 0;

//     if (cards.length === 1) {
//       result += cards.shift();
//     }
//     while (cards.length > 1) {
//       const num1 = Number(cards.shift());
//       const num2 = Number(cards.shift());

//       const sum = num1 + num2;
//       result += sum;
//       cards.push(sum);

//       cards.sort((a, b) => a - b);
//     }

//     console.log(result);
//   });

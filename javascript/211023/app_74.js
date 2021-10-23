var binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  console.log(`left, right : ${left} ${right}`);
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

var searchMatrix = function (matrix, target) {
  const row = matrix.length;
  let range = 0;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === target) {
      return true;
    } else if (matrix[i][0] > target) {
      range = i - 1;
      break;
    } else {
      range = i;
    }
  }

  if (range < 0) {
    range = 0;
  }

  console.log(`range ${range}`);
  return binarySearch(matrix[range], target);
};

// var searchMatrix = function(matrix, target) {
//   if (matrix == null || matrix[0] == null || matrix.length  == 0 || matrix[0].length == 0) return false
//   let low = 0, high = matrix.length * matrix[0].length
//   while (low < high){ //!= since high add extra 1
//       let mid = parseInt((low + high) / 2)
//       //process cell[i][j]
//       let i = parseInt(mid/matrix[0].length) //row /coltotal#!!! not rowtotal# eg.[[1,1]] 0
//       let j =mid % matrix[0].length //column %coltotal#
//       if (matrix[i][j] == target) return true
//       else if (target > matrix[i][j]) low = mid + 1
//       else high = mid
//   }
//   return false
// };

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
const target = 3;

const result = searchMatrix(matrix, target);
console.log(`result >>> ${result}`);

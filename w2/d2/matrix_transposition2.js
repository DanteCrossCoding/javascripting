const transpose = function(matrix) {
  let arr1 =[];
  let arr2 = [];
  let len1 = matrix.length;
  let len2 = matrix[0].length;
  let loopVar = 0;
  if (len1 > len2) {
    loopVar = len1;
  } else {
    loopVar = len2;
  }
  // console.log(len1)
  console.log(loopVar);
  for (let i = 0; i < loopVar; i++) {
    for (const row of matrix) {
      if (row[i] === undefined) {
        return arr1;
      }
      arr2.push(matrix[i][i]);
    }
    arr1.push(arr2);
    arr2 = [];
  }
  return arr1;
  };

// const transpose = function(matrix) {
//   let arr1 =[];
//   let arr2 = [];
//   counter = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (const row of matrix) {
//       arr2.push(matrix[i][i])
//       }
//     }
//     console.log(arr2);
//   };
  
  // return arr1;

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

 printMatrix(transpose([
   [1, 2, 3, 4, 5],
   [1, 2, 3, 4, 5],
   [1, 2, 3, 4, 5],
   [1, 2, 3, 4, 5]
 ]));

console.log('----')

// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7]
]));
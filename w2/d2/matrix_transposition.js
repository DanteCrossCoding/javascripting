 const transpose = function(matrix) {
  
  let arr1 =[];
   let arr2 = [];
   counter = 0;
   let item;
   
  
   if (matrix.length === 1) {
     item = matrix[0]
    for (let element in item) {
      console.log(item[element])
      }
    
  } else {
   
   for (let i = 0; i < matrix.length; i++) {
     for (const row of matrix) {
       if (row[counter] === undefined) {
         return arr1;
       }
       arr2.push(row[counter]);
     }
     counter++
     arr1.push(arr2);
     arr2 = [];
   }
   return arr1;
  }
   }; 

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
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
[1, 2],
[3, 4],
[5, 6]
])); 

console.log('----') 

printMatrix(transpose([
[1, 2, 3, 4, 5, 6, 7]
]));
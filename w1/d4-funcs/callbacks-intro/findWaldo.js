
// Before refactoring - for comparision 
// function findWaldo(arr, found) {
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[i] == "Waldo") {
//      found(i);   // execute callback
//    }
//  }
//}

//function actionWhenFound(i) {
//  console.log("Found Waldo at index " + i + "!");
//}

//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// After refactoring 
const findWaldo = function(names, found) {
  names.forEach(function(item, index) {
    if (item === "Waldo") {
      found (index)
    }
  });
}   


const actionWhenFound = function(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
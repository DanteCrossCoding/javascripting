const findWaldo = function(names, found) {
  names.forEach(function(item, index) {
    if (item === "Waldo") {
      found (index)
    }
  });
}   


findWaldo(["Alice", "Waldo", "Bob", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});

// THIS CODE:
//const actionWhenFound = function(i) {
//  console.log("Found Waldo at index " + i + "!");
//}

//if replaced entirely inline in the call at bottom.
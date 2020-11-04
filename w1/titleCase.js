const titleCase = function(string) {
  if (string === "") {
    console.log("");
  } else {
  
    let arr = string.toLowerCase().split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
    
      newArr.push(arr[i]);
    } newArr = newArr.join(" ");
   console.log(newArr);
 }
};

titleCase("This is a test");
titleCase("test");
titleCase("i r cool");
titleCase("test");
titleCase("");
titleCase("A");
titleCase("WHAT NOW HUH");
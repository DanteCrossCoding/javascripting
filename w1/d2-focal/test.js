
const removeSpace = function(s) {
  let newString = s;
  for (let i = 0; i < newString.length; i++) {
    noSpace = newString.replace(" ", "");
      
    }
   return noSpace;
  
};



const string = "a man a plan a canal panama";
console.log(removeSpace(string));

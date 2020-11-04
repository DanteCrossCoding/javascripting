const sentence = "hello there from lighthouse labs";


const type = function() {
  for (let char of sentence) {
    
    process.stdout.write(char);
    }
  
      setTimeout(type, 50);
  }; 

  console.log(type(sentence))
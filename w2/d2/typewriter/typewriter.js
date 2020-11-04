const sentence = "hello there from lighthouse labs";
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";


const stop = function() {
  if (count === sentence.length -1) {
  break;
  }
};

const type = function() {

 
  
  currentWord = sentence[count];
  letter = currentWord.slice(0, index++);
  process.stdout.write(letter);
  if (letter.length === currentWord.length) {
    count += 1;
    index =0;
    stop;
  }

   setTimeout(type, 50); 
};

  console.log(type(sentence));


/*for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char)}, 1000)
      
    }; */

 

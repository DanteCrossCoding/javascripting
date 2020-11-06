const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFIle's Callback: it has the data.");
  
    if (!error) callback(data);
  })
}
const printCatBreed = breed => {
  console.log('Return Value: ', breed);
};

breedDetailsFromFile('Bombay', printCatBreed);
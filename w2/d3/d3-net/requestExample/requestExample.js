const request = require('request');

request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
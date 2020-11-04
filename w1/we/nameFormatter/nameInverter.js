const nameInverter = function(name) {
  if (name === undefined) {
    return "Error";
  }
  
  let arr = name.split(' ');
  let title = ['Dr.', "Mr. ", "Ms. "];
  let beginning = 0;

if (name === '') {
  return '';  
}
  for (let i = 0; i <arr.length; i++) {
    for (let honorific of title) {
      if (honorific === arr[i]) {
        beginning = i + 1;
        break;
      }
    }
  }
  let result = [];

  for (let i = beginning; i < arr.length; i++) {
    if (arr[i] !== '' && !result.length) {
      result.push(arr[i]);
    } else if (arr[i] !== '') {
      result.push(arr[i] + ',');
      result.reverse();
    }
  }
  console.log(result);

  if (beginning && result.length) {
    return arr[beginning -1] + ' ' + result.join(' ');
  } else {
    return result.join(' ');
  }
}

module.exports = nameInverter;

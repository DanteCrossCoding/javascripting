let num = process.argv.slice(2);
num = Number(num);

function rollDice(num) {
  let results = "";
  for (let i = 0; i < num; i++) {
    let resultOfDice = "";
    resultOfDice = Math.floor((Math.random() * 6) + 1);
    results += resultOfDice + ", ";
  }
  let lastComma = results.lastIndexOf(", ");
  results = results.slice(0, lastComma);

  return results;
}

console.log("Rolled " + num + " dice: " + rollDice(num));
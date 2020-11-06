let creditLimit = 500;


const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
   if (creditLimit > 0 && creditLimit < amount) {
    let diff = (amount - creditLimit);
    let available = (amount - diff);
    creditLimit -= available;
    resolve(available);
    } else if (creditLimit <= 0) {
      reject("Insufficient Funds!");
    } else {
       creditLimit -= amount;
      resolve(amount);
    }
  })
};

console.log("Asking for $150, which should be okay...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`Only ${amountReceived} remaining. Received ${amountReceived}, Credit Limit: ${creditLimit}`);
  })
  .then((amountReceived) => {
    console.log(`\t-> I got $${amount} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });
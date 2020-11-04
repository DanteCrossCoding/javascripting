let delay = 100
let arr = ["|", "/", "-", "\\", "|"];
let curr = []
let el = []
let count = 0
let index = 0

const spinner = function() {
  curr = arr[count];
  if (count === arr.length) {
    return;
  } else {
  el = curr.slice(0, index++);
  process.stdout.write(`\r${el}  `);
  if (el.length === curr.length) {
    count += 1;
    index = 0;
    // console.log(arr[item]);
    // process.stdout.write(`\r${arr[el]}  `);
    delay += 200;
  }
  setTimeout(spinner, delay);
}
}
console.log(spinner(arr));

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
// process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);
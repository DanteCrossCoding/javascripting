const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const pass = grades.filter(function(num) {
  return (num >= 70)
});

console.log("The passing grades are:", pass);
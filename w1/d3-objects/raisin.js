const raisinAlarm = function(cookie) {
  //
  //loop array, checking for icon

  for (const piece of cookie) {
    if (piece === "🍇") {
      return "Raisin alert!";
    }
  } return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let final = [];
  for (const piece of cookies) {
    if (piece.includes("🍇")) {
      final.push("Raisin Alert!");
    } else {
      final.push("All good!");
    }
  }
  return final;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
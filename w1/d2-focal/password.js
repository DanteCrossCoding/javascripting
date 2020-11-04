const pswd = process.argv[2];

const obfuscate = function(password) {
  let newPass = "";
  for (let char = 0; char < password.length; char++) {
    switch (password[char]) {
      case "a":
        newPass += "4";
        break;
      case "e":
        newPass += "3";
        break;
      case "o":
        newPass += "0";
        break;
      case "l":
        newPass += "1";  
      default:
        newPass += password[char];

    }
  } return newPass;
}


console.log(obfuscate(pswd));
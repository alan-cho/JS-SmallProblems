// 1)
/*
function greetings(arr, obj) {
  return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${
    obj.occupation
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
*/

// 2)
/*
const readline = require("readline-sync");

function greeting(name) {
  if (name.includes("!")) {
    console.log(
      `HELLO ${name
        .slice(0, name.length - 1)
        .toUpperCase()}, WHY ARE WE SCREAMING?`
    );
  } else {
    console.log(`Hello ${name}.`);
  }
}

let name = readline.question("Please state your name: ");
greeting(name);
*/

// 3)

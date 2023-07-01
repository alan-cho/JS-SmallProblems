// 1)
/*
let ladder = "";

["head", "heal", "teal", "tell", "tall", "tail"].forEach((word) => {
  if (ladder !== "") {
    ladder += "-";
  }

  ladder += word;
});

console.log(ladder); // expect: head-heal-teal-tell-tall-tail
*/

// 2)
/*
const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

function isReserved(name) {
  let result = RESERVED_KEYWORDS.filter((reserved) => {
    if (name === reserved) {
      return true;
    }
  });

  return result.includes(name);
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
*/

// 3)
// Picks n random elements from an array,
// and returns a new array with those elements.
/*
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = [
  "rice",
  "green bell pepper",
  "mushrooms",
  "carrot",
  "kebab",
  "spinach",
  "soy bean sprouts",
  "mashed potatoes",
  "corn",
  "cucumber",
  "peas",
];

let spices = [
  "peri peri",
  "cinnamon",
  "nutmeg",
  "cardamom",
  "ground ginger",
  "poppy seed",
  "cumin",
];

let extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// Name

let adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
let firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
let secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// Generate!

let dishName = [random(adjective), random(firstNoun), random(secondNoun)];
let dish = [random(ingredients, 3), random(spices, 2), random(extras, 1)];

console.log("How about: " + dishName.join(" "));
console.log("You need: " + dish.join(", "));
*/

// 4)
/*
let todos = [
  "wash car",
  "exercise",
  "buy groceries",
  "balance budget",
  "call plumber",
  "feed fido",
  "get gas",
  "organize closet",
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log("That task is already on the list.");
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log("All tasks complete!");
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log("---------------------");

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask("oil change");
addTask("dentist");
addTask("homework");

completeTasks(3);
displayTaskList();
*/

// 5)

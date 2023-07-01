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
/*
function range(end = -1, start = 0) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(20, 10));
console.log(range(5));
*/

// 6)
/*
let memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

function isValidName(name) {
  return /^[a-z]+ [a-z]+$/i.test(name);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log("Invalid member information.");
  }
}

addMember("Laura Carlisle", "444-2223");
addMember("Rachel Garcia", "232-1191");
addMember("Earl 5mith", "331-9191");

console.log(memberDirectory);
*/

// 7)
/*
// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

let d20 = { min: 1, max: 20 };

function roll(die) {
  return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
}

// Standard target roll tossing a 20-sided die,
// with optional bonus and penalty dice.
// Used to determine whether a character wanting to perform an action
// succeeds or fails, based on whether the sum of the dice is higher
// or lower than the relevant character trait.
// (See below for examples.)
function targetRoll(characterValue) {
  let result = roll(d20);

  console.log("--> " + result);

  switch (result) {
    case 1:
      automaticFail();
      break;
    case 20:
      automaticSuccess();
      break;
    default:
      result >= characterValue ? success() : fail();
  }
}

function success() {
  console.log("Your character succeeds.");
}

function fail() {
  console.log("Your character fails.");
}

function automaticSuccess() {
  console.log("Your character succeeds without effort. Glory!");
}

function automaticFail() {
  console.log("Meagre attempt. Your character fails miserably.");
}

// Example character.
let myCharacter = {
  name: "Jenkins",
  strength: 4,
  constitution: 6,
  education: 11,
  luck: 3,
  sanity: 9,
};

// Example rolls:

// Jenkins wants to break in a door with brute force,
// so he has to roll against his strength value.
targetRoll(myCharacter.strength);

// Jenkins found an ancient scroll and attempts to decipher it.
// He has to roll against his education, in order to determine
// whether he's able to read it.
targetRoll(myCharacter.education);
*/

// 8)
/*
function average(nums) {
  let sum = nums.reduce((total, num) => total + num, 0);

  return sum / nums.length;
}

function median(nums) {
  nums.sort((a, b) => a - b);

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[length / 2 - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);
*/

// 9)

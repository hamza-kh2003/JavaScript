//Exercise 1
function doubleNumbers(arr) {
  return arr.map((val) => val * 2);
}

console.log(doubleNumbers([2, 5, 100]));

//Exercise 2
function stringItUp(arr) {
  return arr.map((val) => val.toString());
}
console.log(stringItUp([2, 5, 100]));

//Exercise 3
function capitalizeNames(arr) {
  return arr.map((val) => {
    val = val.toLowerCase();
    return val.replace(val[0], val[0].toUpperCase());
  });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Exercise 4
function namesOnly(arr) {
  return arr.map((val) => val.name);
}
console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

//Exercise 5
function makeStrings(arr) {
  return arr.map((val) => {
    return val.age >= 18
      ? `${val.name} can go to The Matrix`
      : `${val.name} is under age!!`;
  });
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

//Exercise 6
function readyToPutInTheDOM(arr) {
  return arr.map((val) => `<h1>${val.name}</h1><h2>${val.age}</h2>`);
}

console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

//Exercise 7
function doubleValues(arr) {
  return arr.map((val) => val * 2);
}

console.log(doubleValues([1, -2, -3]));

//Exercise 8
function valTimesIndex(arr) {
  return arr.map((val, index) => val * index);
}

console.log(valTimesIndex([1, -2, -3]));

//Exercise 9
function extractKey(arr, key) {
  return arr.map((val) => val[key]);
}

console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);

//Exercise 10
function extractFullName(arr) {
  return arr.map((val) => `${val.first} ${val.last}`);
}

console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);

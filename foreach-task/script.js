///Exercise 1
function doubleValues(arr) {
  const arr2 = [];
  arr.forEach((val) => arr2.push(val * 2));
  return arr2;
}
console.log(doubleValues([1, 2, 3]));

//Exercise 2
function onlyEvenValues(arr) {
  const arr2 = [];
  arr.forEach((val) => {
    if (val % 2 === 0) arr2.push(val);
  });
  return arr2;
}

console.log(onlyEvenValues([5, 1, 2, 3, 10]));

//Exercise 3
function showFirstAndLast(arr) {
  const arr2 = [];
  arr.forEach((val) => arr2.push(val[0] + val[val.length - 1]));
  return arr2;
}

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));

//Exercise 4
function addKeyAndValue(arr, key, value) {
  arr.forEach((val) => (val[key] = value));
  return arr;
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

//Exercise 5
function vowelCount(str) {
  aCount = 0;
  eCount = 0;
  iCount = 0;
  oCount = 0;
  uCount = 0;

  const ob = {};

  str.split("").forEach((val) => {
    val = val.toLowerCase();
    if (val === "a") {
      aCount++;
      ob[val] = aCount;
    } else if (val === "e") {
      eCount++;
      ob[val] = eCount;
    } else if (val === "i") {
      iCount++;
      ob[val] = iCount;
    } else if (val === "o") {
      oCount++;
      ob[val] = oCount;
    } else if (val === "u") {
      uCount++;
      ob[val] = uCount;
    }
  });

  return ob;
}

console.log(vowelCount("I Am awesome and so are you"));

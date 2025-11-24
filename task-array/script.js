//1
let arr1 = [1, 7, 9, 45];
let arr2 = ["Str", "alex", "moh", "the", "fox", "over", "lazy", "dog"];

//2
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf("Banana")); //1
console.log(fruits.indexOf("Tomato")); //0

//3
let favFood = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
let favSport = ["football", "basketball", "swimming"];
let favMovie = ["Inception", "Avatar", "The Lion King", "Jurassic Park"];

//4
function firstOfArray(arr) {
  return arr[0];
}

console.log(firstOfArray(["hamza", "bayan", "noor"]));

//5
function lastOfArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastOfArray(["hamza", "bayan", "noor"]));

//6
var array = [0, 5, 7, 9]; //[1,3,4,6,8,9,10]

array.push(10);

array.shift();

array.shift();

array.shift();

array.unshift(1, 3, 4, 6, 8);

console.log(array);

//7
var array2 = [5, 9, -7, 3.5];
console.log(array2.push(6)); //the new length of the array
console.log(array2.unshift(2)); //the new length of the array
console.log(array2.shift(2)); //return the first element that removed
console.log(array2.pop()); //return the last element that removed

//8
function middleOfArray(arr) {
  if (arr.length % 2 == 0)
    return `${arr[arr.length / 2 - 1]} and ${arr[arr.length / 2]}`;
  else return arr[Math.floor(arr.length / 2)];
}

console.log(middleOfArray([1, 2, 3, 4, 5]));

//9
var animals = ["cat", "ele", "bird"];
animals[0] = "zebra";
animals[1] = "elephant";
console.log(animals);

var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);

//10
function indexOfArray(arr, index) {
  return arr[index];
}

console.log(indexOfArray([1, 2, 3, 4], 2));

//11
function arrayExceptLast(arr) {
  return arr.slice(0, arr.length - 1);
}

console.log(arrayExceptLast([1, 2, 3, 4, 5, 6, 7]));

//12
function addToEnd(arr, val) {
  arr.push(val);
  return arr;
}

console.log(addToEnd([1, 2, 3], 4));

//13

//for
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 8, 9]));

//while
function sumArray(arr) {
  let sum = 0;
  let i = 0;
  while (i <= arr.length - 1) {
    sum += arr[i];
    i++;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 8, 9]));

//14

//for
function minInArray(arr) {
  let min = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(minInArray([1, 3, 8, 2, 9, 6, 3, 0]));

//while
function minInArray(arr) {
  let min = arr[0];
  let i = 0;
  while (i <= arr.length - 1) {
    if (arr[i] < min) min = arr[i];
    i++;
  }
  return min;
}

console.log(minInArray([1, 3, 8, 2, 9, 6, 3, 0]));

//15

//for
function removeFromArray(arr, val) {
  let index;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (val === arr[i]) {
      index = i;
      break;
    }
  }
  if (index !== undefined) arr.splice(index, 1);
  return arr;
}

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 2));

//while
function removeFromArray(arr, val) {
  let index;
  let i = 0;
  while (i <= arr.length - 1) {
    if (val === arr[i]) {
      index = i;
      break;
    }
    i++;
  }

  if (index !== undefined) arr.splice(index, 1);
  return arr;
}

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 7));

//16

//for
function oddArray(arr) {
  let arr2 = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 !== 0) arr2.push(arr[i]);
  }
  return arr2;
}

console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//while
function oddArray(arr) {
  let arr2 = [];

  let i = 0;
  while (i <= arr.length - 1) {
    if (arr[i] % 2 !== 0) arr2.push(arr[i]);
    i++;
  }

  return arr2;
}

console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//17

//for
function aveArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(aveArray([1, 2, 3, 8, 9]));

//while
function aveArray(arr) {
  let sum = 0;
  let i = 0;
  while (i <= arr.length - 1) {
    sum += arr[i];
    i++;
  }
  return sum / arr.length;
}

console.log(aveArray([1, 2, 3, 8, 9]));

//18

//for
function shorterInArray(arr) {
  let shortest = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest;
}

console.log(
  shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);

//while
function shorterInArray(arr) {
  let shortest = arr[0];

  let i = 0;
  while (i <= arr.length - 1) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
    i++;
  }

  return shortest;
}

console.log(
  shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);

//19

//for
function repeatChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

console.log(repeatChar("hamza", "h"));

//while
function repeatChar(str, char) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === char) count++;
    i++;
  }
  return count;
}

console.log(repeatChar("hamza", "h"));

//20

//for
function evenIndexOddLength(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i].length % 2 !== 0) arr2.push(arr[i]);
  }
  return arr2;
}

console.log(
  evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);

//while
function evenIndexOddLength(arr) {
  let arr2 = [];
  let i = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i].length % 2 !== 0) arr2.push(arr[i]);
    i++;
  }

  return arr2;
}

console.log(
  evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);

//21

//for
function powerElementIndex(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] ** i);
  }
  return arr2;
}

console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));

//while
function powerElementIndex(arr) {
  let arr2 = [];

  let i = 0;
  while (i < arr.length) {
    arr2.push(arr[i] ** i);
    i++;
  }

  return arr2;
}

console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));

//22

//for
function evenNumberEvenIndex(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) arr2.push(arr[i]);
  }
  return arr2;
}

console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));

//while
function evenNumberEvenIndex(arr) {
  let arr2 = [];

  let i = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i] % 2 === 0) arr2.push(arr[i]);
    i++;
  }

  return arr2;
}

console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));

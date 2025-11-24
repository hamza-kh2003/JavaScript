let name1 = "hamza alkhader";
// 1) trim() - removes spaces from both ends
console.log("trim:", name1.trim());

let name2 = "hamza alkhader";
// 2) trimStart() - removes spaces from the start
console.log("trimStart:", name2.trimStart());

let name3 = "hamza alkhader";
// 3) trimEnd() - removes spaces from the end
console.log("trimEnd:", name3.trimEnd());

let name4 = "hamza alkhader";
// 4) padStart() - pads start of string to reach given length
console.log("padStart:", name4.trim().padStart(20, "*"));

let name5 = "hamza alkhader";
// 5) padEnd() - pads end of string to reach given length
console.log("padEnd:", name5.trim().padEnd(20, "*"));

let name6 = "hamza alkhader";
// 6) charAt() - returns character at index 1
console.log("charAt:", name6.charAt(1));

let name7 = "hamza alkhader";
// 7) charCodeAt() - returns unicode of character at index 1
console.log("charCodeAt:", name7.charCodeAt(1));

let name8 = "hamza alkhader";
// 8) split() - splits string into array by space
console.log("split:", name8.trim().split(" "));

let name9 = "hamza alkhader";
// 9) length - number of characters
console.log("length:", name9.length);

let name10 = "hamza alkhader";
// 10) slice() - extracts part of string (start to end)
console.log("slice:", name10.slice(2, 7));

let name11 = "hamza alkhader";
// 11) substring() - similar to slice but cannot use negative index
console.log("substring:", name11.substring(2, 7));

let name12 = "hamza alkhader";
// 12) substr() - extracts part of string (start index, length)
console.log("substr:", name12.substr(2, 5));

let name13 = "hamza alkhader";
// 13) replace() - replaces first occurrence
console.log("replace:", name13.replace("hamza", "Ali"));

let name14 = "hamza alkhader";
// 14) replaceAll() - replaces all occurrences
console.log("replaceAll:", name14.replaceAll("a", "s"));

let name15 = "hamza alkhader";
// 15) toUpperCase() - all characters uppercase
console.log("toUpperCase:", name15.toUpperCase());

let name16 = "hamza alkhader";
// 16) toLowerCase() - all characters lowercase
console.log("toLowerCase:", name16.toLowerCase());

let name17 = "hamza alkhader";
// 17) concat() - concatenates strings
console.log("concat:", name17.trim().concat(" is my full name"));

let name18 = "hamza alkhader";
// 18) indexOf() - index of first occurrence
console.log("indexOf:", name18.indexOf("a"));

let name19 = "hamza alkhader";
// 19) lastIndexOf() - index of last occurrence
console.log("lastIndexOf:", name19.lastIndexOf("a"));

let name20 = "hamza alkhader";
// 20) search() - index of regex match
console.log("search:", name20.search(/Al/));

let name21 = "hamza alkhader";
// 21) match() - returns array of regex matches
console.log("match:", name21.match(/a/g));

let name22 = "hamza alkhader";
// 22) matchAll() - returns iterator of all regex matches
let matches = name22.matchAll(/a/g);
console.log("matchAll:", Array.from(matches));

let name23 = "hamza alkhader";
// 23) includes() - true if string contains substring
console.log("includes:", name23.includes("ade"));

let name24 = "hamza alkhader";
// 24) startsWith() - true if string starts with substring
console.log("startsWith:", name24.startsWith("ham"));

let name25 = "hamza alkhader";
// 25) endsWith() - true if string ends with substring
console.log("endsWith:", name25.endsWith("s"));

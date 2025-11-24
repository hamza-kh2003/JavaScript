let output = "";
let num = 1;
for (let i = 1; num <= 10; i++) {
  for (let y = 1; y <= i && num <= 10; y++) {
    output += num + " ";
    num++;
  }
  output += "\n";
}

console.log(output);

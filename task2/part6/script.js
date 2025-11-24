function isPandigital(num) {
  let strNum = num.toString();

  for (let i = 0; i <= 9; i++) {
    if (!strNum.includes(i.toString())) return false;
  }
  return true;
}

console.log(isPandigital(1304567899));

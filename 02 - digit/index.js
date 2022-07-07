function digit(num) {
  if (num < 10) return num;
  else return digit(digit(Math.floor(num / 10)) + (num % 10));
}

console.log(digit(456));

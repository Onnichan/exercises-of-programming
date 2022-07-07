function imprimeNSubstring(str, index) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let r = str.substring(i, j);
      arr.push(r);
    }
  }

  arr.sort();
  let char = arr.join("");
  let charById = "";
  for (let l = 0; l < char.length; l++) {
    if (index === l) {
      charById = char[l - 1];
    }
  }
  return [char, charById];
}

const result = imprimeNSubstring("dbac", 2);
console.log(`NSubstring: ${result[0]}, char result: ${result[1]}`);

/**
 * Funcion para crear la matriz en espiral desde el centro
 */
function matrixCenter(n) {
  let a = Math.floor(n / 2);
  let b = Math.floor(n / 2) + 1;
  let arr = new Array(n);
  let value = 1;
  let result = 0;

  for (let k = 0; k < arr.length; k++) {
    arr[k] = new Array(n);
  }

  arr[a][a] = value++;
  while (value <= n * n) {
    for (let i = a; i <= b; i++) {
      arr[i][b] = value++;
    }
    a--;
    for (let i = b - 1; i >= a; i--) {
      arr[b][i] = value++;
    }
    for (let i = b - 1; i >= a; i--) {
      arr[i][a] = value++;
    }
    for (let i = a + 1; i <= b; i++) {
      arr[a][i] = value++;
    }
    b++;
  }

  for (let k = 0; k < arr.length; k++) {
    for (let p = 0; p < arr.length; p++) {
      console.log(`arr[${k}][${p}] =  ${arr[k][p]}` + " ");
      if (k == p || (k+p) == arr.length - 1) {
        result = result + arr[k][p];
      }
    }

    console.log("\n");
  }

  console.log("La suma de las diagonales es: ", result);
}

matrixCenter(1003);

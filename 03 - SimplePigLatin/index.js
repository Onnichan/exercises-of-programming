function pigIt(str) {
  let cadena = str
    .split(" ")
    .map(cad => {
      if (
        !(
          (cad[0].charCodeAt() >= 65 && cad[0].charCodeAt() <= 90) ||
          (cad[0].charCodeAt() >= 97 && cad[0].charCodeAt() <= 122)
        )
      ) {
        return cad;
      }

      console.log(cad[0].charCodeAt());
      return cad.slice(1) + cad[0] + "ay";
    })
    .join(" ");
  //   console.log(cadena);
  return cadena;
}

console.log(pigIt('Pig latin is cool'));

EJERCICIO MATRIZ ESPIRAL

Author: Walter Daniel Huaynapata Aguilar


Este ejercicio realmente se me complicó bastante pero se pudo resolver,
cabe recalcar que no esta optimizado ya que al imprimir la matriz se demora bastante debido a que lo realicé secuencialmente.

Comenzaré a explicar los pasos que realicé primeramente para mostrar 
la matriz en espiral desde el centro

 ```
  21 22 23 24 25
  20 7  8  9  10
  19 6  1  2  11
  18 5  4  3  12
  17 16 15 14 13 
  ```

Problemas al plantear el ejercicio:

* Al analizar el ejercicio uno se da cuenta que lo más complicado será el generar la matriz en espiral desde el centro, al menos en mi caso.

* Otro problema quizas sería el realizar la suma de la diagonal secundaria de la matriz ya que no salta tanto a la vista.

* Y por último yo diría la optimización del algoritmo debido a que el algoritmo que yo planteé no es muy eficiente en cuanto a dimensiones mas grandes.

Resolución del problema

Para comenzar yo creé una función matrixCenter(n)
que recibe un parámetro n que es la dimensión de la matriz

```
function matrixCenter(n) {
  ....
}
```

de ahi dentro de la función creé algunas variables 
como 
a, b: que son las variables que tomar el valor central de la matriz porque en este ejercicio se empieza desde el centro
arr : que es la matriz inicial que después servirá para crear la matriz de dos dimensiones
value : el valor inicial 
result : variable para la suma de las diagonales de la matriz

```
let a = Math.floor(n / 2);
let b = Math.floor(n / 2) + 1;
let arr = new Array(n);
let value = 1;
let result = 0;
```

La siguiente pieza de código es para crear una matriz bidimensional en javascript

```
for (let k = 0; k < arr.length; k++) {
  arr[k] = new Array(n);
}
```

Aqui comenzamos por inicializar el centro de la matriz con el valor de 1, por ejemplo en una matriz de 3 x 3, la variable a tomaría el valor de a = 2 debido al redondeo que se puso en la declaración y asignación de la variable `a` en el comienzo de la función, y por ende `arr[a][a] = arr[2][2] = 1` 

```
arr[a][a] = value++;
```

```
7 8 9 
6 1 2
5 4 3
```

Este bloque de código es donde se hace la magia, ya que aquí es donde se genera el valor de cada coordenada de la matriz, realizandolo de manera secuencial
```
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
```
En este bucle while sirve para evaluar que solamente se generen los valores (value) necesarios para rellenar la matriz, por ejemplo una matriz de 5 X 5, debería de tener solo 25 valores

```
while (value <= n * n) {
```

Por ejemplo en una matriz de 3 x 3

```
7 8 9 
6 1 2
5 4 3
```
con el siguiente bucle podemos tomar los valores 2 y 3 gracias a los valores de a y b que toman teniendo en cuenta que la matriz sea de 3 x 3, que `a = 1` y `b = 2` y por último decrementar el valor de a en 1 para el siguiente bucle for  
```
for (let i = a; i <= b; i++) {
  arr[i][b] = value++;
}
a--;
```

Nota: Los valores a y b nos sirven como índices, ya que en un comienzo toman los valores de las coordenadas (x,y), por ejemplo el valor central de una matriz 3 x 3  donde se comienza a rellenar la matriz es (1,1) = 1, pero a y b en un comienzo toman los valores de (1,2) = (a,b) porque ya hemos asignado el valor de `arr[1][1] = 1` antes, a medida que se van recorriendo la matriz el valor de b va incrementarse hasta llegar al tamaño de la matriz y el valor de a decrementará hasta llegar al inicio de la matriz que sería el valor de 0 

A medida que se vaya recorriendo la matriz el valor de la variable ``` value ``` incrementará hasta tomar todos los valores de la matriz.

Siguiendo con el ejemplo de una matriz de 3 x 3, con este bloque de código se puede rellenar los valores 
de 4 y 5
```
7 8 9 
6 1 2
5 4 3
```
El bucle for comienza en b - 1 porque tenemos que tomar un valor antes de b = 2 hasta llegar al valor de i = a = 1
```
for (let i = b - 1; i >= a; i--) {
  arr[b][i] = value++;
}
```
Siguiendo con el mismo ejemplo

```
7 8 9 
6 1 2
5 4 3
```
Este bucle for nos ayuda a rellenar los valores 6 y 7 gracias a que b = 2 y a = 1
```
for (let i = b - 1; i >= a; i--) {
  arr[i][a] = value++;
}
```

Y por último rellenamos los valores 8 y 9

```
7 8 9 
6 1 2   ->  
5 4 3
```
Gracias a este bucle ya que a = 0 y b = 2 y al final se incrementa el valor de b en 1 para la siguiente matriz espiral si hubiera, pero en este caso como no hay, entonces lo que queda es salir del bucle while porque ya no se cumple la condición.
```
for (let i = a + 1; i <= b; i++) {
  arr[a][i] = value++;
}
b++;
```

Este bloque de código sirve para dos cosas, recorrer la matriz e imprimirla por consola y lo segundo es que se realiza la operación de la suma de las diagonales de la matriz, que en este caso para la suma de las diagonales la más facil sería la diagonal principal porque solo se toma los valores de las coordenadas que tengan el mismo valor por ejemplo (1,1), (2,2), etc , y para la diagonal secundaria se saca evaluando la suma de las coordenadas del eje X y el eje Y tiene que ser igual al tamaño de la matriz - 1 porque empezamos desde el valor 0
```
for (let k = 0; k < arr.length; k++) {
    for (let p = 0; p < arr.length; p++) {
      console.log(`arr[${k}][${p}] =  ${arr[k][p]}` + " ");
      if (k == p || (k+p) == arr.length - 1) {
        result = result + arr[k][p];
      }
    }

    console.log("\n");
  }
```

Y por último mostramos por consola el resultado de la suma de las diagonales y con eso concluimos el ejercicio.

```
console.log("La suma de las diagonales es: ", result);
```
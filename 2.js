// 2. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.

function numaleaint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let array = [];

for (let i = 1; i <= 10; i++) {
    array.push(numaleaint(1, 100));
}

console.log(array);


/* 
NOTAS:

para generar números aleatorios se usa el método random()

1.- let x = Math.random(); 
devolverá números aleatorios PERO entre 0 y 1 (1 no incluido) es decir la respuesta será: 0.63, 0.42, etc.

2.- let x Math.random() * 10;
devolverá números aleatorios entre 0 y 10 (excluye el 10)

3.- let x Math.random() * 100;
devolverá números aleatorios entre 0 y 100 (excluye el 100)

4.- let x = Math.floor((Math.random() * 10) + 1);
Un número entero aleatorio entre 1 y 10:  tenemos que sumarle 1 para que incluya el 10.


conclusión:
https://teamtreehouse.com/community/mathfloor-mathrandom-max-min-1-min-explanation

https://www.w3schools.com/jsref/jsref_random.asp


Math.random arroja numeros desde 0 (incluyendo) hasta 1 (excluyendo) en decimales : 0.63, 0.42, etc


math.floor toma los decimales y los convierte en enteros, tomando su valor más bajo: 45.95 devuelve 45

si le multiplicamos 0,1,5 a random, floor tomará:
0  a  .99999 ...  ->  0 
1  a  1.99999 ...  ->  1 
... 
5  a  5.99999 ...  ->  5 



 */











/* var array = [];
usuario = prompt(parseInt("coloque la cantidad: "));

while (array.length < usuario) {
    array.push(Math.floor(1000 * Math.random()));
    console.log(array);
}
 */
/*Creare un progetto Javascript che
dichiari e contestualmente inizializzi
la costante X a 10; che dichiari la
variabile y e successivamente assegni
X a y; che dichiari e contestualmente
inizializzi la variabile z al prodotto di
X per y diviso 2.*/
/*RISPOSTA:
let x = 10; let y; y = x; let z = (x * y)/2;
console.log (z);*/

/*
Creare un progetto Javascript che dichiari e
contestualmente inizializzi la costante MAX a 15;
che dichiari le variabili a, b e c
contemporaneamente; che assegni ad a, b e c
rispettivamente i numeri 10, 11 e 12; che
successivamente incrementi le tre variabili della
costante dichiarata in apertura e che infine vi
sottragga un valore numerico costante a scelta
del programmatore (senza dichiarare la costante).
*/
/*RISPOSTA:
const MAX = 15;
let a = 10; let b = 11; let c = 12;
a += MAX; b += MAX; c += MAX;
a -= 5; b -= 5; c -= 5;
console.log (a, b, c);  
*/

/*Creare un progetto Javascript che dichiari e
contestualmente inizializzi la variabile v1 a 10;
che dichiari e contestualmente inizializzi la
costante C1 alla stringa “Alessandro”; che
successivamente assegni a v1 la
concatenazione delle due strutture dati
nell’ordine in cui sono state dichiarate
mediante l’operatore di autoassegnamento.
Successivamente si crei una variabile v2 che
valga true se e solo se v1 vale “Alessandro10”.*/

/*RISPOSTA:
let v1 = 10; const C1 = "Alessandro";
v1 += C1; 
let v2 = (v1 === "Alessandro10");
console.log(v2); */

/*Creare un progetto Javascript che dichiari e
contestualmente inizializzi la costante MIN a
10 e la costante MAX a 99; che dichiari e
successivamente assegni alla variabile
dueCifre un valore a caso tra i due valori*/
   /* 
    const MIN = 0; const MAX = 99;
    let dueCifre = Math.floor(Math.random()*(MAX-MIN+1)+MIN);
    console.log (dueCifre);*/

    
    
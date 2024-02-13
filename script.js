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

/*/Controllo dati
let x = 0;//INIZIALIZZO LA VARIABILE PER NON EFFETTUARE IL PRIMO IF
do{//CONTROLLO INSERIMENTO UTENTE DEL PRIMO VALORE
   if (!( x >= 0 && x <= 10 )) {//CORREZIONE UTENTE RINCO
      x = prompt("IL VALORE DEVE ESSERE 0 <= X >= 10 !!! :");
   }else{//PRIMA RICHIESTA UTENTE
      x = prompt("Inserire il primo valore (Il valore deve essere 0 <= X >= 10 ):");
      }
}while( !( x >= 0 && x <= 10 ) );//CONDIZIONE PER USCIRE CON IL DATO CORRETTO
//Svolgimento ex
if(  )*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
    //ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x; let y;
x = prompt("Inserire il primo valore:");
y = prompt("Inserire il primo valore:");
if( x > y ){
   console.log( "Il valore più grande tra i due numeri è: ", x);
}else if( y > x ){
   console.log( "Il valore più grande tra i due numeri è: ", y);
}else{
   console.log( y, " e", y, " sono uguali");
}*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.
  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
//INIZIALIZZO LA VARIABILE PER NON EFFETTUARE IL PRIMO IF
/*do{//CONTROLLO INSERIMENTO UTENTE DEL PRIMO VALORE
   if (!( x >= 0 && x <= 20 )) {//CORREZIONE UTENTE RINCO
      x = prompt("IL VALORE DEVE ESSERE 0 <= X >= 20 !!! :");
   }else{//PRIMA RICHIESTA UTENTE
      x = prompt("Inserire il primo valore (Il valore deve essere 0 <= X >= 20 ):");
      }
}while( !( x >= 0 && x <= 20 ) );//CONDIZIONE PER USCIRE CON IL DATO CORRETTO*/
/* SCRIVI QUI LA TUA RISPOSTA
let num = 0
num = prompt("Inserire il  valore:");
if( num < 5 ){
   console.log("Tiny");
}else
   if( num < 10 ){
      console.log("Small");
   }else
      if( num < 15 ){
         console.log("Medium");
      }else
         if( num < 20 ) {
            console.log("Large");
         }else
            if( num >= 20 ){
               console.log("Huge");
            }
 */

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA 

for( let i = 0; i <= 10; i++ ){

   if( i === 3 || i === 8 ){
      continue;
   }
   console.log( i );
}
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA
for( let i = 0; i <= 15; i++ ){

   if( ( i % 2) == 0 ){
      console.log( i, " è PARI" );
   }else{
      console.log( i, " è DISPARI" );
   }
} */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x; let y;
y = prompt("Inserire il primo valore: ");
x = prompt("Inserire il secondo valore: ");

if( (x == 8) || (y == 8) ){
   console.log("Uno o entrambi i valori sono 8");
   if(  (x - y) === 8 || (x + y) === 8 || (y - x) === 8 ){
      console.log("E inoltre, la loro addizione/sottrazione fa 8"); 
   }
}else{
   if( (x - y) === 8 || (x + y) === 8 || (y - x) === 8 ){
      console.log("La loro addizione/sottrazione fa 8");
   }
}*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 20;
if ( totalShoppingCart > 50 ){
   console.log( "Sconto promozione applicato!(-10$)");
}else{
   totalShoppingCart -= 10;
   console.log( "Costo spedizione 10$");
}*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 60;//TOTALE CARRELLO (QUANTO SPENDE TIZIO)
console.log( "Oggi è il Black Friday -20%");
totalShoppingCart -= ( totalShoppingCart * 0.2);//APPLICO - 20% SUL TOTALE
if ( totalShoppingCart > 50 ){//SE RISULTA MINORE 50
   console.log( "Sconto promozione applicato!(-10$)");//NON AUMENTA LA SPESA
}else{
   totalShoppingCart += 10;//AUMENTA LA SPESA
   console.log( "Costo spedizione 10$");
}
console.log(totalShoppingCart)*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA
let gender; let ismale = false;
gender = ismale ? "male" : "female";
console.log( gender ); */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console.
  Se un valore tuttavia è multiplo di 3 (operatore modulo!),stampa al suo posto la parola 
  "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, 
  stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA
for (let i = 1; i <= 100 ; i++) {
   if( (i % 3 ) === 0 && (i % 5 ) !== 0){//solo multiplo 3
      console.log("FIZZ");
   }else if( (i % 5 ) === 0 && (i % 3 ) !== 0 ){//solo multiplo 5
      console.log("BUZZ");
   }else if ( (i % 5 ) === 0 && (i % 3 ) === 0 ){//multiplo di entrambi
      console.log("FIZZ BUZZ");
   }else{//non multiplo
      console.log( i );
   }
}*/
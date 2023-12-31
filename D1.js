/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* I principali datatype di JavaScript sono 5:
-String: corrisponde ad un valore composto da caratteri alfabetici e/o alfanumerici che definiscono il contenuto della nostra variabile o, per meglio dire, il "messaggio" che decidiamo
ci venga mostrato nel momento in cui noi vogliamo verificare il contenuto della variabile nella console di un browser. Le parole che scegliamo come contenuto devono 
essere sempre apposte tra apostrofi o virgolette affinchè ciò che scriviamo venga letto correttamente;
- Number: è un valore numerico che si attribuisce come contenuto di una variabile, non va apposto tra apostrofi o virgolette, al fine di impedire al browser di leggere 
il valore come stringa invece di numero;
-Boolean: ci permette di constatare la veridicità o la falsità di quanto dichiariamo nella variabile. Solitamente genera "TRUE" o "FALSE";
-Undefined: valore che ci dice che la nostra variabile è indefinita, ovvero non esiste;
-Null: valore che ci informa che il contenuto della variabile non è stato ancora assegnato.*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = 'Marissa'
console.log(nome)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let n1 = 12
let n2 = 20
let sum = n1+n2
console.log(sum)
/* oppure  */
let sum1 = 12+20
console.log(sum1)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
nome = 'Burca'
console.log(nome)

/* la variabile const. l'ho messa a fine pagina poiché quando il browser mi segna un errore non mi mostra più
il console.log delle variabili che imposto dopo */



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let minus= 4 - x
console.log(minus)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
let compare = name1 !== name2
console.log(compare)

compare= name1.toLowerCase === name2.toLowerCase

console.log(compare)

/* seconda parte esercizion 5 */
const cognome = 'Marissa'
cognome = 'Burca'
console.log(cognome) /* errore di assignment to constant variable */



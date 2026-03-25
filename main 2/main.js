
// Funzione per generare numero random da 1 a 5
function generaNumeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione per stabilire se un numero è pari
function isPari(numero) {
  return numero % 2 === 0;
}

// INPUT UTENTE
const scelta = prompt("Scegli: pari o dispari").toLowerCase();
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Numero computer
const numeroComputer = generaNumeroRandom();

// Somma
const somma = numeroUtente + numeroComputer;

// Controllo risultato
const risultatoPari = isPari(somma);

// OUTPUT
console.log("Numero utente:", numeroUtente);
console.log("Numero computer:", numeroComputer);
console.log("Somma:", somma);

if (
  (risultatoPari && scelta === "pari") ||
  (!risultatoPari && scelta === "dispari")
) {
  console.log("Hai vinto!");
} else {
  console.log("Ha vinto il computer!");
}
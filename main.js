console.log('PARI E DISPARI');

// Creo la funzione e metto tutto in minuscolo per non avere problemi
function palindroma (parola) {
    parola = parola.toLowerCase ()



    // Inverto la parola
    const parolaInvertita = parola.reverse('')


    // Confronto
    if (parola === parolaInvertita) {
        return true
    } else {
        return false
        }

}

// Chiedi all'utente di inserire una parola
const input = prompt ('Inserisci una parola')

if (palindroma(input)) {
    console.log('è palindroma');
} else {
    console.log('non è palindroma');
    
}


/*STEP:
1. Far scegliere all'utente tra PARI e DISPARI
2. Far inserire all'utente un numero da 1 a 5 
3. Creare funzione per generare un numero random tra 1 e 5 per il pc 
    3a.Generare numero casuale per il pc
4. Sommare il numero scelto dall'utente e il numero generato per il pc
5. Creare funzione per controllare se il risultato della somma è PARI o DISPARI
6. Dichiarare il vincitore in base alla scelta dell'utente e al risultato ottenuto 
*/


//1. Far scegliere all'utente tra PARI e DISPARI e controlliamo se il valore inserito è corretto:
let choice;

do {
    choice = prompt('Facciamo un gioco: scegli "pari" o "dispari":').toLowerCase()

    if ((choice != 'pari') && (choice != 'dispari')) {
        alert('Il valore inserito non è valido.')
    }
} while ((choice != 'pari') && (choice != 'dispari'));
    alert('Hai scelto' + " " + choice)


//2. Far inserire all'utente un numero da 1 a 5 e controlliamo che il valore inserito sia corretto:
let userNumber;

do {
    userNumber = parseInt(prompt('Ora scrivi un numero da 1 a 5'))

    if (isNaN(userNumber) || (userNumber < 1) || (userNumber > 5)) {
        alert('Il valore inserito non è valido');
    }
} while (isNaN(userNumber) || (userNumber < 1) || (userNumber > 5))
    alert('Hai scelto il numero' + " " + userNumber);

    
//3. Creare funzione per generare un numero random tra 1 e 5 per il pc:
function randomNumber (min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
}


//3a.Generare numero casuale per il pc:
const pcNumber = randomNumber (1, 5);
    alert('Il numero scelto dal pc è' + " " + pcNumber)


//4. Sommare il numero scelto dall'utente e il numero generato per il pc:
const result = userNumber + pcNumber;
    alert('Il risultato della somma tra i due numeri è' + " " + result + " " + 'quindi...')

//5. Creare funzione per controllare se il risultato della somma è PARI o DISPARI:
function isEven (number) {
    return number % 2 == 0;
}

//6. Dichiarare il vincitore in base alla scelta dell'utente e al risultato ottenuto 
if ((isEven(result) && choice == 'pari') || (!(isEven(result)) && choice == 'dispari')) {
    alert('..Hai vinto!')
}

else {
    alert('..Hai perso!')
}






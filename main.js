// chiedere quanti chilometri vuole fare
var chilometri = prompt('quanti chilometri vuoi fare?')
console.log(chilometri);
// chiedere quanti anni ha l'utente
var anni = prompt('quanti anni hai?')
console.log(anni);
// calcolo sconto
if(anni < 18) {
    console.log('hai uno sconto del 20%');
} else if(anni >= 65) {
    console.log('hai uno sconto del 40%');
} else {
    console.log('non hai nessuno sconto');
}

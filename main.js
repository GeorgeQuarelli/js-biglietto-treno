// chiedere quanti chilometri vuole fare
var chilometri = prompt('quanti chilometri vuoi fare?')
console.log(chilometri + 'chilometri');
// chiedere quanti anni ha l'utente
var anni = prompt('quanti anni hai?')
console.log(anni + 'anni');

//calcolo prezzo chilometrio
var costo_chilometri = (chilometri * 0.21);
console.log('costo dei chilometri' + costo_chilometri + '€');
// calcolo sconto
if(anni < 18) {
    var sconto_minorenni = (costo_chilometri * 20 / 100)
    console.log(sconto_minorenni + '€ di sconto (20%)');
    var costo_totale1 = (costo_chilometri - sconto_minorenni)
    console.log('costo totale :' + costo_totale1 + '€');
} else if(anni >= 65) {
    var sconto_over = (costo_chilometri * 40 / 100)
    console.log(sconto_over + '€ di sconto (40%)');
    var costo_totale2 = (costo_chilometri - sconto_over)
    console.log('costo totale :' + costo_totale2 + '€');
} else {
    console.log('non hai nessuno sconto');
}

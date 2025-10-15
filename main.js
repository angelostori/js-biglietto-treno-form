/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input 
e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta 
finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form 
in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi 
sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando 
la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da 
seguire per il secondo milestone. Potete scegliere di implementare una soluzione 
completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/

const form = document.querySelector('form')

const name_field = document.getElementById('name-field')
const distance_field = document.getElementById('distance-field')

let tabName = document.getElementById('table-name')
let tabDeal = document.getElementById('table-deal')
let tabTrainCar = document.getElementById('table-train-car')
let tabCode = document.getElementById('table-code')
let tabPrice = document.getElementById('table-price')

const select = document.getElementById("age");



form.addEventListener('submit', (event) => {
    event.preventDefault()
    //console.log(`${name_field.value} ${distance_field.value}`);
    tabName.append(name_field.value)

    const valore = select.value;
    //console.log(valore);
    if (valore === 'maggiorenne') {
        tabDeal.append('Biglietto standard')
    } else {
        tabDeal.append('Biglietto ridotto')
    }

    const numeroCarrozza = Math.floor(Math.random() * 10) + 1;
    //console.log(numeroCarrozza);
    tabTrainCar.append(numeroCarrozza)

    const codiceCP = []

    for (let i = 0; i < 4; i++) {
        const numeroCasuale = Math.floor(Math.random() * 9);
        codiceCP.push(numeroCasuale)
    }
    //console.log(codiceCP.join(''));
    tabCode.append(codiceCP.join(''))

    /*
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    a applicato uno sconto del 40% per gli over 65.
    */
    let price = distance_field.value * 0.21
    //console.log(distance_field.value);

    //tabPrice.append(price)
    let discount = 0;

    if (valore === 'minorenne') {
        discount = price * 0.2
        price -= discount
        tabPrice.append(price.toFixed(2))
    } else if (valore === 'anziano') {
        discount = price * 0.4
        price -= discount
        tabPrice.append(price.toFixed(2))
    } else {
        tabPrice.append(price.toFixed(2))
    }
})

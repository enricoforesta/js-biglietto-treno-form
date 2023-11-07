"use strict"

/*
1. Chiedere all'utente i km da percorre, salvarlo in una variabile e trasformarlo in numero.
*/

const elementKm = Number(
    document.getElementsByClassName("xx-kilometri")
);

console.log("I kilometri sono:", elementKm, "km");

/*
2. Chiedere all'utente l'età, salvarlo in una variabile e trasformarlo in numero.
*/

const elementEta = parseInt(
    document.getElementsByClassName("xx-eta")
);

console.log("Età: ", elementEta);


//prezzo km
const elementPrezzo = 0.21;

//sconti

const elementScontoMinorenne = 20;

const elementScontoOver65 = 40;

//bottone

const elementInput = document.getElementsByClassName("xx-button");

console.log(elementInput);

/* 3. Calcolare il prezzo, kilometri inseriti * 0,21€.
    I prezzi finali dovranno essere con massimo due decimali, ES. 10,99€

       -- Se l'età è inferiore a 18 anni devo applichiamo lo sconto del 20%.

       -- Altrimenti Se l'età è superiore di 65 anni devo applichiamo lo sconto del 40%.

    */


// calcolo prezzo
elementInput.addEventListener(
    'click',
    function () {
        
    }
);


// if (!isNaN(elementKm) && !isNaN(elementEta)) {

//     let elementSomma = (elementKm * elementPrezzo);


//     if (elementEta < 18) {

//         elementSomma -= ((elementSomma / 100) * elementScontoMinorenne);

//     }

//     else if (elementEta > 64) {

//         elementSomma -= ((elementSomma / 100) * elementScontoOver65);

//     }


//     console.log("Prezzo Finale", elementSomma.toFixed(2), "€");


// }

// else {
//     console.log("errore");
// }








console.log("FINE")
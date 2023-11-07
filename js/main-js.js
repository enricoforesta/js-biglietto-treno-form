"use strict"

/*
1. Chiedere all'utente i km da percorre, salvarlo in una variabile e trasformarlo in numero.
*/

const elementKm = Number(
    prompt("inserire i km da percorrere")
);

console.log("I kilometri sono:", elementKm, "km");

/*
2. Chiedere all'utente l'età, salvarlo in una variabile e trasformarlo in numero.
*/

const elementEta = parseInt(
    prompt("inserire la tua età")
);

console.log("Età: ", elementEta);


//prezzo km
const elementPrezzo = 0.21

//sconti

const elementScontoMinorenne = 20;

const elementScontoOver65 = 40;

/* 3. Calcolare il prezzo, kilometri inseriti * 0,21€.
    I prezzi finali dovranno essere con massimo due decimali, ES. 10,99€

       -- Se l'età è inferiore a 18 anni devo applichiamo lo sconto del 20%.

       -- Altrimenti Se l'età è superiore di 65 anni devo applichiamo lo sconto del 40%.

    */


// calcolo prezzo

if (!isNaN(elementKm) && !isNaN(elementEta)) {

    let elementSomma = (elementKm * elementPrezzo);


    if (elementEta < 18) {

        elementSomma -= ((elementSomma / 100) * elementScontoMinorenne);

    }

    else if (elementEta > 64) {

        elementSomma -= ((elementSomma / 100) * elementScontoOver65);

    }


    console.log("Prezzo Finale", elementSomma.toFixed(2), "€");


}

else {
    console.log("errore")
}









console.log("FINE")
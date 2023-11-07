"use strict"

/*
1. Chiedere all'utente i km da percorre, salvarlo in una variabile e trasformarlo in numero.
*/

const elementKm = document.querySelector(".xx-kilometri");

console.log("I kilometri sono:", elementKm, "km");

/*
2. Chiedere all'utente l'età, salvarlo in una variabile e trasformarlo in numero.
*/

const elementEta = document.querySelector(".xx-eta");

console.log("Età: ", elementEta);


//prezzo km
const elementPrezzo = 0.21;

//sconti

const elementScontoMinorenne = 20;

const elementScontoOver65 = 40;

//bottoni

const elementInput = document.querySelector(".xx-button");

console.log(elementInput);

const elementReset = document.querySelector(".xx-reset");

console.log(elementReset);


//mostra biglietto
const elementMostra = document.querySelector(".xx-mostra");









/* 3. Calcolare il prezzo, kilometri inseriti * 0,21€.
    I prezzi finali dovranno essere con massimo due decimali, ES. 10,99€

       -- Se l'età è inferiore a 18 anni devo applichiamo lo sconto del 20%.

       -- Altrimenti Se l'età è superiore di 65 anni devo applichiamo lo sconto del 40%.

    */


// calcolo prezzo
elementInput.addEventListener(
    'click',
    function () {
        if (!isNaN(elementKm.value) && !isNaN(elementEta.value)) {

            //mostra biglietto
            elementMostra.classList.add("d-block");
            elementMostra.classList.remove("d-none");

            let elementSomma = (elementKm.value * elementPrezzo);

            // nome e cognome
            const elementName = document.querySelector(".xx-name");

            console.log(elementName.value);

            const elementNameOut = document.querySelector(".xx-name-out");

            elementNameOut.innerHTML = elementName.value

            // biglietto

            const elementBigliettoOut = document.querySelector(".xx-biglietto-out");

            elementBigliettoOut.innerHTML = "Biglietto Standard";

            //numrero

            const elementNumero = document.querySelector(".xx-numero-random");

            elementNumero.innerHTML = Math.floor(Math.random() * 20 + 1);

            //codice

            const elementCodice = document.querySelector(".xx-codice");

            elementCodice.innerHTML = "999" + Math.floor(Math.random() * 20 + 1);

            //condizione

            if (elementEta.value < 18) {

                elementSomma -= ((elementSomma / 100) * elementScontoMinorenne);

                // biglietto
                elementBigliettoOut.innerHTML = "Biglietto Junior";

                //codice
                elementCodice.innerHTML = "777" + Math.floor(Math.random() * 20 + 1);

            }

            else if (elementEta.value > 64) {

                elementSomma -= ((elementSomma / 100) * elementScontoOver65);

                // biglietto
                elementBigliettoOut.innerHTML = "Biglietto Senior";

                //codice
                elementCodice.innerHTML = "888" + Math.floor(Math.random() * 20 + 1);

            }
            //prezzo

            const elementPrezzoOut = document.querySelector(".xx-prezzo");

            elementPrezzoOut.innerHTML = elementSomma.toFixed(2) + "€";

            console.log("Prezzo Finale", elementSomma.toFixed(2), "€");




        }

        else {

            console.log("errore");

        }

    }

);

elementReset.addEventListener(
    'click',
    function () {
        //mostra biglietto

        elementMostra.classList.remove("d-block");
        elementMostra.classList.add("d-none");
    }

)

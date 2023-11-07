# Calcolare il prezzo del biglietto

## Descrizione
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

## MILESTONE 1:

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

## MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina

## Logica

1. Chiedere all'utente i km da percorre, salvarlo in una variabile e trasformarlo in numero.

2. Chiedere all'utente l'età, salvarlo in una variabile e trasformarlo in numero.

---- fare una condizione in modo che se l utente inserisce valori sbagliatidiversi da numeri, gli stampa errore.


3. Calcolare il prezzo, kilometri inseriti * 0,21€.
   I prezzi finali dovranno essere con massimo due decimali, ES. 10,99€

       -- Se l'età è inferiore a 18 anni devo applichiamo lo sconto del 20%.

       -- Altrimenti Se l'età è superiore di 65 anni devo applichiamo lo sconto del 40%.

4. MILESTONE 1

        -- cambiamo i prompt con degli input e aggiugniamo un bottone nell html.
        -- colleghiamo gli input e il bottone  alle variabili. 

5. MILESTONE 2

        --inseriamo gli input per il nome, cambiamo l input dell età, aggiungiamo un altro bottone di Annulla.
        --costruiamo la stuttura html.
        --Creiamo il biglietto che verra visualizzato solo dopo aver premuto il pulsante. 

        




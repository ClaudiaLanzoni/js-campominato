/**
     *  Il computer deve generare 16 numeri casuali tra 1 e 100.
        I numeri non possono essere duplicati.
        In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
        sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
        Se il numero è presente nella lista dei numeri generati, la partita termina, 
        altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
        inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
        l’utente ha inserito un numero consentito.
    * 
    */

    //  # PREPARATION
    //  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
    //  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
    //  3 - Crea un array per ricordare i numeri (scelti) dall'utente
    // **** Creo una variable di appoggio per il punteggio

    // # GAMEPLAY
    // 1) Chiedere un numero all'utente
    // 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
    // 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
    // 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
    //  

    // # ENDGAME
    // a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
    // b. Stampiamo il punteggio del giocatore 


    let bombList = []; //array vuoto da riempire con "bombe"

    function numeroRandomPc(min, max) { //funzione per generare numero randomico ("bomba") da mettere nell'array bombList
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    } 

    while(bombList.length < 5) { //finchè l'array non è di 16 elementi continua a pusharci dentro il numero random

        let numeroRandom = numeroRandomPc(1, 100);
        if(!bombList.includes(numeroRandom)) {
            bombList.push(numeroRandom);
        }

    }

    console.log(bombList); //elenco numeri random del pc "bombe"

    let playerNumbers = []; //array per trattenere man mano i numeri scelti dal giocatore

    let staiPerdendo = false; //l'informazione che "hai perso" arriva prima!!! 
                            //l'informazione che "hai vinto" arriva per ultima!!!

  

    for (i = 0; i < bombList.length; i++ ) {
        let numeroUtente = prompt('Inserisci il ' + (i+1) + '° numero');

        playerNumbers.push(numeroUtente);
                                            
        if (bombList.includes(parseInt(numeroUtente))) { 
            //includes non funzionava perchè non era numero in array che invece è di numeri
            staiPerdendo = true;
            break; //mi permette di uscire subito dal ciclo for nel caso in cui l'input sia in bombList
            

        /*if (!bombList.includes(parseInt(numeroUtente))) { 

            

            //!!!!!
            /*while(numeroUtente.length === 0 || Number.isNaN(numeroUtente)) { //questa verifica funziona solo per 
                                                                                //un invio a vuoto e non se si mettono
                                                                                //input Number.isNaN
                numeroUtente = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));
            }*/

           
        }
    }

    

    //!!!!!
    console.log(playerNumbers); //stampa l'array con i numeri del giocatore, però così li stampa tutti ...
    
    if (staiPerdendo == true) { //perdi perchè è la condizione in cui il numero utente è contenuto in bombList
        alert('HAI PERSO')
    } else { 
        alert('HAI VINTO'); //l'informazione che "hai perso" arriva prima!!! 
                            //l'informazione che "hai vinto" arriva per ultima!!!
    }









    
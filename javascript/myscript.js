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

    let bombs; //sarebbe 16

    let maxRandomNumber; //sarebbe 100

    //sezione su input difficoltà
    const difficultyLevelsList = ['facile', 'medio', 'difficile']; //array di livelli difficoltà

    let chosenDifficultyLevel = prompt('Scegli un livello di difficoltà tra facile, medio e difficile'); 

    while (chosenDifficultyLevel.length == 0 || !difficultyLevelsList.includes(chosenDifficultyLevel.toLowerCase())) {
        chosenDifficultyLevel = prompt('Scegli un livello di difficoltà tra facile, medio e difficile');
    }

    let gameChance = getLevel(chosenDifficultyLevel); //creo variabile che estrapola funzione per il livello difficoltà

    bombs = gameChance[0]; //collego il primo elemento dell'array gameChance
    maxRandomNumber = gameChance[1]; //collego il secondo elemento dell'array gameChance

    let numeroScelte = maxRandomNumber - bombs;

    //funzione per generare numero randomico ("bomba") da mettere nell'array bombList
    function numeroRandomPc(min, max) { 
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    } 

    while(bombList.length < bombs) { //finchè l'array non è di "bombs" elementi continua a pusharci dentro il numero random

        let numeroRandom = numeroRandomPc(1, 100);
        if(!bombList.includes(numeroRandom)) { //non include
            bombList.push(numeroRandom);
        }

    }

    console.log(bombList); //elenco numeri random del pc "bombe"

    let playerNumbers = []; //array per trattenere man mano i numeri scelti dal giocatore

    let staiPerdendo = false; //l'informazione che "hai perso" arriva prima!!! 
                            //l'informazione che "hai vinto" arriva per ultima!!!

    for (i = 0; i < numeroScelte; i++ ) {
        let numeroUtente = prompt('Inserisci il ' + (i+1) + '° numero');

        playerNumbers.push(numeroUtente); //inserisce i numeri giocati dall'utente nell'array apposito

        if (!bombList.includes(numeroUtente)) { //lo inserisco unicamente per poter fare la verifica dell'input col while

            while(numeroUtente.length === 0 || Number.isNaN(numeroUtente)) { //se input non è corretto fa ripartire 
                                                                            // lo stesso prompt, lo si capisce dal testo 
                                                                            // del prompt
                numeroUtente = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));
            }
        }
                                            
        if (bombList.includes(parseInt(numeroUtente))) { //includes non funzionava perchè non avendo messo parseInt non inseriva l'input in un array che è di numeri
       
            staiPerdendo = true;
            
            break; //mi permette di uscire subito dal ciclo for nel caso in cui l'input sia in bombList
        }    
    }

    console.log(playerNumbers); //stampa l'array con i numeri giocati dall'utente
    
    if (staiPerdendo == true) { //"perdi" perchè è la condizione in cui il numero utente è contenuto in bombList
        alert('HAI PERSO')
    } else { 
        alert('HAI VINTO'); //l'informazione che "hai perso" arriva prima!!! 
                            //l'informazione che "hai vinto" arriva per ultima!!!
    }

    //funzione per rendere livelli di difficoltà
    function getLevel(difficultyLevel) {

        let bombsAmount; //quante bombe sono presenti
        let gameBoxes; //caselle del gioco
    

    switch (difficultyLevel) {
        case 'facile':
            bombsAmount = 3;
            gameBoxes = 20;
            break;
        
        case 'medio':
            bombsAmount = 3;
            gameBoxes = 15;
            break;
        
        case 'difficile':
            bombsAmount = 3;
            gameBoxes = 10;
            break;

        default:
            bombsAmount = 3;
            gameBoxes = 20;
            break;
    }
    return [bombsAmount, gameBoxes];

    }



    
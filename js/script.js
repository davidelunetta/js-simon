// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

        let randomNumbers = [];
        let timer;
        let correctGuesses = 0;
        let userGuesses = [];

        document.getElementById('startButton').addEventListener('click', function() {
            // Genera 5 numeri casuali e stampali in pagina
            for (let i = 0; i < 5; i++) {
                const randomNumber = Math.floor(Math.random() * 100) + 1;
                randomNumbers.push(randomNumber);
                document.getElementById('numbersContainer').innerHTML += randomNumber + ' ';
            }

            // Nascondi il bottone "Inizia" e avvia il timer
            document.getElementById('startButton').style.display = 'none';
            timer = setTimeout(function() {
                document.getElementById('numbersContainer').style.display = 'none';
                document.getElementById('userInputContainer').style.display = 'block';
                document.getElementById('submitButton').addEventListener('click', checkGuess);
            }, 30000); // 30 secondi
        });

        function checkGuess() {
            const userInput = parseInt(document.getElementById('userInput').value);

            if (!isNaN(userInput)) {
                userGuesses.push(userInput);
                document.getElementById('userInput').value = '';

                if (userGuesses.length === 5) {
                    clearInterval(timer);
                    document.getElementById('userInputContainer').style.display = 'none';
                    document.getElementById('resultContainer').style.display = 'block';

                    // Confronta i numeri casuali con quelli inseriti dall'utente
                    for (let i = 0; i < 5; i++) {
                        if (randomNumbers.includes(userGuesses[i])) {
                            correctGuesses++;
                        }
                    }

                    // Stampa il risultato
                    document.getElementById('correctCount').textContent = correctGuesses;
                    document.getElementById('correctNumbers').textContent = userGuesses.join(', ');
                }
            }
        }

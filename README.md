# Campo Minato

## Griglia Campo Minato ##

1. creo il layout HTML e stilizzo il foglio con CSS
2. dichiaro una funzione riutilizzabile con JavaScript che prende un elemento nel documento e ne toglie/assegna una classe (in questo caso una utility per determinarne il colore o la visibilità).
3. dichiaro le variabili che dovranno registrare in memoria la griglia delle caselle e il pulsante play del gioco (elementi reattivi).
4. con la funzione che applica toggle la applico al pulsante in modo che al click faccia comparire/scomparire la griglia (di default la classe è display: block)
5. con un ciclo _for_ creo 100 caselle da "appendere" al div contenitore, oltre i numeri all'interno che determinano il numero della casella. Scelgo for e non while perchè gli estremi sono ben definiti
6. riutilizzando la funzione precedentemente creata, la personalizzo facendo in modo che al click su una casella venga applicato il colore di background azzurro.

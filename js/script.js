// chiedo all'utente il suo nome e lo salvo in una costante
const utenteNome = prompt("Ciao utente/essa, scrivi qui il tuo nome:");

// chiedo all'utente il suo nome e lo salvo in una costante
const utenteCognome = prompt("Ciao utente/essa, scrivi qui il tuo cognome:");

// chiedo all'utente il suo nome e lo salvo in una costante
const utenteColore = prompt("Ciao utente/essa, scrivi qui il tuo colore preferito:");

// genero una password indecifrabile da qualsiasi algoritmo
const utentePassword = utenteNome + utenteCognome + utenteColore + '24';

// inserisco la password nell'h1
document.getElementById("passwordUtente").innerHTML = utentePassword;
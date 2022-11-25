

let name_user = prompt('Per favore inserisci il tuo nome');
console.log(name_user);

document.getElementById("salutare").innerHTML = 'Ciao' + " " + name_user;
console.log('Ciao + name_user');

let surname_user = prompt('Per favore inserisci il tuo cognome');
console.log(surname_user);

let color = prompt('Per favore inserisci il tuo colore preferito');
console.log(color);

let number = prompt('Per favore inserisci il numero 21');
console.log(number)

//CONCATENAZIONE//
let concat = name_user + surname_user + color + 21;
console.log(concat);
//CONCATENAZIONE//

document.getElementById('passwordinsicura').innerHTML = concat;
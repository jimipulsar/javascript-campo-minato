function randomnumber (min, max){
  var numerogenerato = Math.floor(Math.random() * (max - min + 1) + min);
  return numerogenerato;
}

var numerigenerati = 16;
var numericasuali = [];

for (var i = 0; i < numerigenerati; i++) {
  var numerocasuale = randomnumber(1, 100);
  numericasuali.push(numerocasuale);
}
console.log(numericasuali);

var numero_richieste = 100 - numerigenerati;
var numeri_corretti = [];

var i = 0;

do {
  var numero_giocatore = parseInt(prompt('Indovina 16 numeri compresi tra 1 e 100. Inserisci un numero:'));
  if(!numericasuali.includes(numero_giocatore) && numero_giocatore < 100){
    numeri_corretti.push(numero_giocatore);
  }
  console.log(numero_giocatore);
  i ++;
  console.log('Tentativo n. ' + i);
}
while (!numericasuali.includes(numero_giocatore) && i < numero_richieste && numero_giocatore < 100);
console.log(numeri_corretti);
document.writeln("<h2>Hai indovinato! Il numero corretto è " + numero_giocatore + " <br>Il tuo punteggio è di: " + i + "</h2>");

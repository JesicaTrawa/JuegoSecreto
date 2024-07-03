//Variables
let numeroMaximoPosible = 100; //adivinar dentro de estos numeros
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'; una opcion
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto){
   numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

  console.log(typeof(numeroUsuario));
   //Compara
  if (numeroUsuario == numeroSecreto) {

    alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);

  }else {
      if (numeroUsuario > numeroSecreto){
        alert ('El numero secreto es menor');
      } else {
        alert ('El numero secreto es mayor');
      }

     //Contador incrementa
     intentos++;

     //palabraVeces = 'veces'; una opcion

     if (intentos > maximosIntentos){
        alert (`Legaste al numero maximo de ${maximosIntentos} intentos`);
        break;
     }
   }  
}
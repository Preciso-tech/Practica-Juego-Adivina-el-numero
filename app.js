
/*let titulo = document.querySelector('h1');
titulo.innerHTML = ('Juego del Numero Secreto');
let parrafo = document.querySelector('p');
parrafo.innerHTML = ('Indica un numero del 1 al 10');*/

/*function intentoDeUsuario() {
    alert("Click desde le boton");
    return;
}*/
let numeroSecreto = 0;                          // Alcance o ambito globaal de la variable 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

                                                                      
function asignarTextoElemento(elemento, texto) {                     //esto se aplica solo en eventos; esto se llama parametros JS
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === numeroMaximo) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';  //forma directa
 /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value =''; esta una forma de hacerlo de por pasos utilizadon variable*/ 
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    // Si ya sorteamos todos lo numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta includio en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) { 
        return generarNumeroSecreto();
          } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
         }
    }   
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    /*1)indicar mensaje de intervalos de numeros
      2)generar el numero aleatorio
      3)inicializar el numero de intentos*/
    condicionesIniciales(); //condiciones iniciales realiza esta 3 actividdes 
    //deshabiliar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

var i;
let puntosU = 0;
let puntosM = 0;
let eleccionMaq = "tijera";

for( i=1;i<=3;i++) {
let eleccionUsuario = prompt("ingrese Piedra; Papel o Tijera").toLowerCase();


if(eleccionUsuario=="piedra"||eleccionUsuario=="papel"||eleccionUsuario=="tijera"){
if(eleccionUsuario==eleccionMaq){
          alert("Intento "+i +" usuario: "+puntosU+"-"+" maquina: "+puntosM);

}
else if(
          eleccionUsuario == "piedra" && eleccionMaq=="tijera"||
          eleccionUsuario == "papel" && eleccionMaq=="piedra"||
          eleccionUsuario == "tijera" && eleccionMaq=="papel"

          ){
                   puntosU++;
                   alert("Intento"+i+" usuario: "+puntosU+"-"+" maquina: "+puntosM);
                   
                   
                   
          }
          else{
                    puntosM++;
                    alert("Intento"+i+" usuario: "+puntosU+"-"+" maquina: "+puntosM);

                    
          }
}else{alert("Eleccion no valida Intente nuevamente");
          i=i-1;
}
}

          console.log("el juego ha terminado")
         
if(puntosU == puntosM){
                    console.log("resultado Final = EMPATE")
          }
          else if(puntosU>puntosM) {
                    console.log(" Ganador = usuario")
          }
          else {
                    console.log(" Ganador = maquina")
           }
        
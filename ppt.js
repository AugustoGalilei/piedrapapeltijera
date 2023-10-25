var i;
let puntosU = 0;
let puntosM = 0;
let maquinaElige=["piedra","papel","tijera"];

//let eleccionMaq = maquinaElige[Math.floor(Math.random()*3)];


for( i=1;i<=3;i++) {
          let eleccionMaq = maquinaElige[Math.floor(Math.random()*3)];
          
alert(eleccionMaq);
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
                    document.getElementById("resultado").innerHTML =
              "resultado Final = EMPATE";
          }
          else if(puntosU>puntosM) {
                    console.log(" Ganador = usuario")
                    document.getElementById("resultado").innerHTML = " Ganador = usuario";
          }
          else {
                    console.log(" Ganador = maquina")
                    document.getElementById("resultado").innerHTML = " Ganador = maquina";
           }
        
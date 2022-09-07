let audio = document.getElementById("audio");


function validacionFr(valor){
    valor = prompt("Odias a frozo?");
    if(valor == "si"){
        alert("No debiste decir eso amigo... GAME OVER")
        audio.play();
    }else if(valor == "no"){
        alert("Bro wtf? XDDD Intentalo de nuevo")
        validacionFr()
    }else{
        alert(`Solo "si" o "no" como respuesta. Intentalo de nuevo`)
        validacionFr()
    }
}
validacionFr()













/* let ciudadano = 11;
let oveja = 3;
let casa = 0;
let jabali = 1;
    function matarOvejas() {
        ciudadano = ciudadano - 6;
        oveja = oveja - 1;
    }
    function crearCasa(){
        ciudadano = ciudadano - 1;
        casa = casa + 1;

    }

    function matarJabali(){
        ciudadano = ciudadano - 1;
        jabali = jabali - 1;
    }
    
    function validacion(value){
        value = prompt('bro');

            if(value == "xd"){
                return alert('hola');
            }else if(value == "XD"){
                return alert('chau');
            }else{
                alert('otra vez')
                validacion()
            }
    }

*/
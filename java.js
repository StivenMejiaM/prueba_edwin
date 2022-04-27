const input = document.getElementById('mensaje');
const letra1 = document.getElementById('mayuscula');
const text = document.getElementById('comentario');
const btn = document.getElementById('boton1');
const descripcion = document.getElementById('escribir');


input.addEventListener('keypress', captureEvent);

function captureEvent(event){
    if (event.keyCode == 13) {
        console.log(event);
        letra1.textContent = event.target.value.charAt(0).toUpperCase();
    } 
}

function almacenar(obj){
    const valuar = descripcion.value;
    text.textContent = valuar;
    var maxLength = 200;
    var strLength = obj.value.length;

    if(strLength > maxLength){
        document.getElementById('charNum').innerHTML = strLength+' de '+maxLength;
    }else{
        document.getElementById('charNum').innerHTML = 'Caracteres ingresados '+strLength+' maximos '+maxLength+ " caracteres";
    }

}
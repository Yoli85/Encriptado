function Encriptar() {
    var valor = document.getElementById('TextoEncriptar').value;

    var inputRespuesta = document.getElementById('TextoRespuesta');

    inputRespuesta.value = EncriptarTexto(valor);
    return;
}

function EncriptarTexto(valor) {
    valor = valor.replaceAll(/e/g, 'enter');
    valor = valor.replaceAll(/i/g, 'imes');
    valor = valor.replaceAll(/a/g, 'ai');
    valor = valor.replaceAll(/o/g, 'ober');
    valor = valor.replaceAll(/u/g, 'ufat');
    return valor;

}




function Desencriptar() {
    var valor = document.getElementById('TextoEncriptar').value;
    var inputRespuesta = document.getElementById('TextoRespuesta');
    inputRespuesta.value = DesencriptarTexto(valor);
    return;
}


function DesencriptarTexto(valor) {
    valor = valor.replaceAll('ai', 'a');
    valor = valor.replaceAll('enter', 'e');
    valor = valor.replaceAll('imes', 'i');
    valor = valor.replaceAll('ober', 'o');
    valor = valor.replaceAll('ufat', 'u');
    return valor;
}


const copiarContenido = async () => {
    //Obtengo el texto del text area del resultado
    var Copiar = document.getElementById('TextoRespuesta').value;
    try {
        await navigator.clipboard.writeText(Copiar);
        console.log('Contenido copiado al portapapeles');
        alert('Contenido copiado al portapapeles');
    } catch (err) {
        alert('Error al copiar: ', err);
    }
}


import cipher from './cipher.js';

/*b1 = botón 1,
  b2 = botón 2,
  t1 = texto 1, (mensaje original no cifrado),
  t2 = texto 2, (mensaje cifrado)*/

//definiendo el botón codificar//
let encode = document.getElementById("encode");

//Creando función flecha anónima dentro de un evento click que responda al botón "cifrar"  
encode.addEventListener("click", () => { 
//lo que hará cuando haga el click es lo siguiente://
    let box1= document.getElementById("cuadro1").value;
    let offset = document.getElementById("offset").value;
    let textoCodificado = cipher.encode(offset, box1);

    document.getElementsById("cuadro3").innerHTML = textoCodificado;
});


//definiendo el botón decodificar//
let decode = document.getElementById("decode");

//Creando función flecha anónima dentro de un evento click que responda al botón "descifrar"
decode.addEventListener("click", () => {
    let box3 = document.getElementsById("cuadro3").value;
    let offset= document.getElementById("offset").value;
    let textoDecodificado = cipher.decode(offset, box3);
  textoDecodificado = document.getElementById("cuadro1");
    //document.getElementsById("cuadro1").innerHTML = textoDecodificado;
});
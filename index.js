import cipher from './cipher.js';


//definiendo el botón codificar//
const encode = document.getElementById("encode");

//Creando función flecha anónima dentro de un evento click que responda al botón "cifrar"  
encode.addEventListener("click", () => { 
//lo que hará cuando haga el click es lo siguiente://
  const mensaje1= document.getElementById("text1").value;
  const offset = document.getElementById("offset").value;
  const textoCodificado = cipher.encode(offset, mensaje1);
  console.log(textoCodificado);

  document.getElementById("text3").value = textoCodificado;
});


//definiendo el botón decodificar//
const decode = document.getElementById("decode");

//Creando función flecha anónima dentro de un evento click que responda al botón "descifrar"
decode.addEventListener("click", () => {
  const mensaje3 = document.getElementById("text3").value;
  const offset= document.getElementById("offset").value;
  const textoDecodificado = cipher.decode(offset, mensaje3);
 
  document.getElementById('text1').value = textoDecodificado;

});

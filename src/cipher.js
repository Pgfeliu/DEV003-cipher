const cipher = {
  // ...
  encode: (number, text) => { //Función flecha para codificar n(numero) y string(texto);
    let result = "";//Declarando una variable de resultado;
    let code=0;//Declarando la codificación;
    //let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i=0; i<text.length; i++){ //bucle for para recorrer el largo de la cadena
      //Condición va a partir en 0, 0 va a ser menor al largo del texto escrito por la persona. Va uno por uno.
      
       code = text.charCodeAt(i);//aplicando charCodeAt para asignar código ASCII a la cadena.
                                  // Declarando la variable code. Se transforma en número.
       
        if(code>=65 && code<=90){ //formula en mayuscula
          code=(code-65+parseInt(number))%26+65; 
        }
        if(code>=97 && code<=122){ //formula en minuscula.
          code=(code-97+parseInt(number))%26+97;
        }
        result += String.fromCharCode(code); //Definiendo el resultado. Ahora se transforma en numero.
                                            // Aplicando fromCharcode para retornar la cadena en letras segun ASCII.
      }
          return result.toUpperCase(); // Retornand resultado en mayúsculas.  
  },
  
    decode: (number, text) => {
      let result = "";
      let code=0;
      //let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for(let i=0; i<text.length; i++){
        
         code = text.charCodeAt(i);
         
          if(code>=65 && code<=90){
            code=(code+65-parseInt(number))%26+65;
          }
          if(code>=97 && code<=122){
            code=(code+33-parseInt(number))%26+97;
          }
          result += String.fromCharCode(code);
        }
            return result.toUpperCase();
  }
  }
export default cipher


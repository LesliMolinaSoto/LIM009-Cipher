window.cipher = {
  encode: (desplazar, texto) => {
    /* Acá va tu código */
          let mensajeCifrado = "";
          /*obtengo la posicion de la letra*/
          for (let i=0; i<texto.length; i++){
           let ascii= texto.charCodeAt(i);
           let posicion = (ascii - 65 + parseInt(desplazar)% 26 + 65);
          mensajeCifrado +=String.fromCharCode(posicion);
          }
          console.log(mensajeCifrado);
         return mensajeCifrado;
      
          },
  decode: (desplazarDes, textoDes) => {
    /* Acá va tu código */
          let mensajeDescifrado = ""; 
          for(let i=0; i<textoDes.length; i++){
           let asciiDes = textoDes.charCodeAt(i);
           let posicionDes = ((asciiDes + 65 - parseInt(desplazarDes))%26 + 65);
           mensajeDescifrado +=String.fromCharCode(posicionDes);
          }
          console.log(mensajeDescifrado);
          return mensajeDescifrado;
        }
} 

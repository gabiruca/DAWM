const URL = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let peticion = async (event) => {
	let respuesta = await fetch(URL);
	const reader = respuesta.body.getReader();

	const contentLength = +respuesta.headers.get('Content-Length');
	let receivedLength = 0; // bytes recibidos en este momento
    let chunks = []; // arreglo de fragmentos binarios recibidos (conforman el cuerpo) 
    while(true) {
      const {done, value} = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
      receivedLength += value.length;

      await esperar(10)
	    
    }
	let chunksAll = new Uint8Array(receivedLength); // (4.1)
    let position = 0;
    for(let chunk of chunks) {
      chunksAll.set(chunk, position); // (4.2)
      position += chunk.length;
    }
	let result = new TextDecoder("utf-8").decode(chunksAll);
	let data = JSON.parse(result);
    document.getElementById("respuesta2").innerHTML = data.length + ' registros';
}

let sobrecargar = async (event) => {
	peticion();
	let elementos = [...Array(500).keys()]

	for (let vez = 1; vez <= elementos.length; vez++) {

		//Llame a la función peticion
		/*Inicio*/
		peticion();
		/*Fin*/
		
		document.getElementById("respuesta3").innerHTML = 'Peticion '+ vez
		await esperar(10)
	}
	
}

window.onload = function () {
  
    //Restricciones en el servidor
  document.getElementById('cargar2').addEventListener('click', peticion )
  document.getElementById('cargar3').addEventListener('click', sobrecargar )


}
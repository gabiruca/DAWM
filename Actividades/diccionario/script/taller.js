window.addEventListener('DOMContentLoaded',(event)=>{
    const button = document.querySelector('button');
    button.addEventListener('click',()=>{
        const cadena = document.getElementById("texto").value;
        let arr = cadena.split(' ');
        for(i=0;i<arr.length;i++){
            let palabra=arr[i];
            let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+palabra;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                let audio, sourceUrl,text ='';
                let seleccion=data[0];
                let word=seleccion['word'];
                let phonetics=(seleccion['phonetics'])[0];
                let meanings=(seleccion['meanings'])[0];
                let synonyms=meanings['synonyms'];
                let antonyms=meanings['antonyms'];
                if(phonetics.length!=0){
                    audio=phonetics['audio'];
                    sourceUrl=phonetics['sourceUrl'];
                    text = phonetics['text'];
                }
                let plantilla = `<div class="col">
	                                    <div class="card">
		                                    <div class="card-body">
			                                    <h5 class="card-title"><a href="${sourceUrl}" target="_blank">${word}</a></h5>
			                                    <audio controls>
			                                        <source src="${audio}" type="audio/mpeg">
			                                        Your browser does not support the audio element.
			                                    </audio>
			                                    <h6 class="card-subtitle mb-2 text-muted">${text}</h6>
			                                    <p class="card-text text-primary">${synonyms}</p>
			                                    <p class="card-text text-danger">${antonyms}</p>
		                                    </div>
	                                    </div>
                                    </div>;`
            
                document.getElementById('respuesta').innerHTML += plantilla;
            })
            .catch(console.error);
        }
        document.getElementById('respuesta').innerHTML ='';
    });
});
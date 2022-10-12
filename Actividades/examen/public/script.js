const cargarDatos=()=>{
    fetch("https://damp-beach-17296.herokuapp.com/https://dataserverdaw.herokuapp.com/recetas")
    .then(response=>response.json())
    .then(data=>{
        //De Json
        let seleccion=data['recipes'];
        let primera=seleccion[0];
        let url=primera["URL"];
        let title=primera['TranslatedRecipeName'];
        let cuisine=primera['Cuisine'];
        let course=primera['Course'];
        let diet=primera['Diet'];
        let prepT=primera['PrepTimeInMins'];
        let cookT=primera['CookTimeInMins'];
        let totalT=primera['TotalTimeInMins'];
        let ingredients=(primera['TranslatedIngredients']).split(",");
        let instructions=primera['TranslatedInstructions'];
        //De html
        let link=document.getElementById("link");
        let texto1=document.getElementById("texto1");
        let texto2=document.getElementById("texto2");
        let texto3=document.getElementById("texto3");
        let c1=document.getElementById("1");
        let c2=document.getElementById("2");
        let c3=document.getElementById("3");
        let ingredientes=document.getElementById("ingredientes");
        let instrucciones=document.getElementById("instrucciones");
        //recorrido
        for(i=0;i<ingredients.length;i++){
            let cbox=document.createElement('input');
            cbox.setAttribute("type","checkbox");
            cbox.setAttribute("id","cb"+i);
            let ingrediente=ingredients[i];
            let label=document.createElement('label');
            label.setAttribute("for","cb"+i);
            label.innerHTML=ingrediente;
            ingredientes.appendChild(cbox);
            ingredientes.appendChild(label);
            ingredientes.innerHTML+="<br>";
        }
        console.log(instructions);
        //filling
        link.innerHTML=title;
        link.setAttribute("href",url);
        texto1.innerHTML=cuisine;
        texto2.innerHTML=course;
        texto3.innerHTML=diet;
        c1.innerHTML=prepT+"'";
        c2.innerHTML=cookT+"'";
        c3.innerHTML=totalT+"'";
        instrucciones.innerHTML=instructions;
    })
    .catch(console.error);
}

window.addEventListener('DOMContentLoaded',(event)=>{
    cargarDatos();
});
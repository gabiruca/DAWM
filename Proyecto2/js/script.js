window.addEventListener('DOMContentLoaded',(event)=>{
    let opciones=`<option value="1">Información</option>
                    <option value="2">Tabla fecha-visita</option>
                    <option value="3">Gráficos</option>`
    document.querySelector('div > select').innerHTML+=opciones;
});

let select = document.querySelector('div > select');
select.addEventListener('change', function() {
    if(select.value=="1"){ //info
        let plant=`<h4 class="mb-3">Información extraída de wikipedia acerca de Tiger King (Inglés)</h4>
        <div id="imagen">
            <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Tiger_King%2C_Murder%2C_Mayhem_and_Madness_publicity_image.jpg">
        </div>
        <div class="infor css-selector"><p><b>Title:</b> Tiger King</p></div>
        <div class="infor css-selector"><p><b>Also known as:</b></p><ul><li>Murder, Mayhem, and Madness</li><li>Tiger King 2</li><li>The Doc Antle Story</li></ul></div>
        <div class="infor css-selector"><p><b>Genre:</b></p> <ul><li>True crime</li><li>Documentary</li></ul></div>
        <div class="infor css-selector"><p><b>Directed by:</b></p><ul><li>Eric Goode</li><li>Rebecca Chaiklin</li></ul></div>
        <div class="infor css-selector"><p><b>Starring:</b></p><ul><li>Joe Exotic</li><li>Carole Baskin</li><li>Bhagavan Antle</li><li>John Finlay</li><li>Rick Kirkham</li><li>John Reinke</li><li>Kelci Saffery</li><li>Jeff Lowe</li><li>Erik Cowie</li><li>Howard Baskin</li><li>Travis Maldonado</li><li>Dillon Passage</li><li>Tim Stark</li><li>Rachel Starr</li></ul></div>
        <div class="infor css-selector"><p><b>Composers:</b></p><ul><li>Mark Mothersbaugh</li><li>John Enroth</li><li>Albert Fox</li><li>Aaron Kaplan</li><li>Robert Mothersbaugh</li></ul></div>
        <div class="infor css-selector"><p><b>Country of origin:</b> United States</p></div>
        <div class="infor css-selector"><p><b>Original language:</b> English</p></div>
        <div class="infor css-selector"><p><b>Number of seasons:</b> 3</p></div>
        <div class="infor css-selector"><p><b>Number of episodes:</b> 15 (+1 special)</p></div>`
        document.getElementById("cargar-contenido").innerHTML=plant;

    }else if(select.value=="2"){ //tabla
        fetch("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Tiger_King/daily/20210901/20210930")
        .then(response=>response.json())
        .then(data=>{
            let plantilla= `<h4>Tabla de visitas a Tiger King en wikipedia por día en el mes de Septiembre del año 2021</h4>
                            <table id="tabla" class="slideLeft"> 
                                <caption>Septiembre - 2021</caption>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Vistas</th>
                                </tr>
                            </table>`
            document.getElementById('cargar-contenido').innerHTML = plantilla;
            let items = data["items"];
            items.filter(elemento=>elemento['project'])
            .forEach(elemento =>{
                let timestamp=elemento['timestamp'];
                let year = timestamp.slice(0,4);
                let month = timestamp.slice(4,6);
                let day = timestamp.slice(6,8);
                let fecha = year+"-"+month+"-"+day;
                let vistas = elemento['views'];
                let plantilla1 = `<tr>
                                    <td> ${fecha} </td>
                                    <td> ${vistas} </td>
                                </tr>`;
                document.getElementById('tabla').innerHTML += plantilla1;
            })
        })
        .catch(console.error);

    }else if(select.value=="3"){ //gráficos
        fetch("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Tiger_King/daily/20210901/20210930")
        .then(response=>response.json())
        .then(data=>{
            //agregar los canvas tags
            let chart1=`<h4>Gráfico de barras</h4>
                        <canvas id="myChart"></canvas>`;
            let chart2=`<h4>Gráfico linear</h4>
                        <canvas id="myChart2"></canvas>`;
            let chart3=`<h4>Gráfico pastel (porcentajes)</h4>
                        <canvas id="myChart3"></canvas>`;
            document.getElementById("cargar-contenido").innerHTML=chart1;
            document.getElementById("cargar-contenido").innerHTML+=chart2;
            document.getElementById("cargar-contenido").innerHTML+=chart3;
            //todas las fechas y vistas
            const fechas=[];
            const vistasL=[];
            //separar vistas <2000, entre 2000 y 10000, >10000
            let cantMenor=0;
            let cantEntre=0;
            let cantMayor=0;
            //extr. datos
            let items = data["items"];
            items.filter(elemento=>elemento['project'])
            .forEach(elemento =>{
                let timestamp=elemento['timestamp'];
                let year = timestamp.slice(0,4);
                let month = timestamp.slice(4,6);
                let day = timestamp.slice(6,8);
                let fecha = year+"-"+month+"-"+day;
                let vistas = elemento['views'];
                fechas.push(fecha);
                vistasL.push(vistas);
                if(parseInt(vistas)<2000){
                    cantMenor+=1;
                }else if(parseInt(vistas)>2000 && parseInt(vistas)<10000){
                    cantEntre+=1;
                }else if(parseInt(vistas)>10000){
                    cantMayor+=1;
                }
            })
            //barras
            graficoBarras(fechas,vistasL);
            //Lineas
            graficoLinear(fechas,vistasL);
            //Pie
            const total=vistasL.length;
            let pMenor=(cantMenor/total)*100;
            let pEntre=(cantEntre/total)*100;
            let pMayor=(cantMayor/total)*100;
            const listaP=[pMenor,pEntre,pMayor];
            graficoPie(listaP);
        })
        .catch(console.error);
    }else{
        document.getElementById("cargar-contenido").innerHTML="";
    }
})


//funciones
const graficoBarras=(fechas, visitas)=>{
    const ctx=document.getElementById("myChart");
    const myChart=new Chart(ctx,{
        type: 'bar',
        data: {
            labels: fechas,
            datasets:[{
                label: 'Gráfico de barras de visitas en Septiembre 2021',
                data: visitas,
                backgroundColor:[
                    'green',
                    'yellow',
                    'red',
                    'blue',
                    'brown'
                ],
                borderWidth:1.5
            }]
        }
    })
}
const graficoLinear=(fechas, visitas)=>{
    const ctx2=document.getElementById("myChart2");
    const myChart2=new Chart(ctx2,{
        type: 'line',
        data:{
            labels: fechas,
            datasets:[{
                label: 'Gráfico linear de visitas en Septiembre 2021',
                data: visitas,
                fill: false,
                borderColor: 'pink',
                tension: 0.5
            }]
        }
    })
}
const graficoPie=(listaP)=>{
    const ctx3=document.getElementById("myChart3");
    const myChart3=new Chart(ctx3,{
        type: 'pie',
        data:{
            labels:[
                'Menor que 2000',
                'Entre 2000 y 10000',
                'Mayor que 10000'
            ],
            datasets: [{
                label: 'Gráfico pastel',
                data: listaP,
                backgroundColor:[
                    'red',
                    'yellow',
                    'purple'
                ],
                hoverOffset: 4
            }]
        }
    })
}
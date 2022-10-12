const ejecutarCodigo = () => {
    fetch("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Tiger_King/daily/20210901/20210930")
    .then(response=>response.json())
    .then(data=>{
        let items = data["items"];
        items.filter(elemento=>elemento['project'])
        .forEach(elemento =>{
            let timestamp=elemento['timestamp'];
            let year = timestamp.slice(0,4);
            let month = timestamp.slice(4,6);
            let day = timestamp.slice(6,8);
            let fecha = year+"-"+month+"-"+day;
            let vistas = elemento['views'];
            let plantilla = `<tr>
                                <td> ${fecha} </td>
                                <td> ${vistas} </td>
                            </tr>`;
            document.getElementById('tabla').innerHTML += plantilla;
        })
    })
    .catch(console.error);
}

window.addEventListener('DOMContentLoaded',(event)=>{
    ejecutarCodigo();
});
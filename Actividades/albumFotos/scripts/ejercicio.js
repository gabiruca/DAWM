let ejecutarCodigo = () => {
    /*alert('Hola, mundo!')*/

    let seleccion = document.getElementById("titulo1");
    seleccion.textContent='Album de fotos';

    let elementos = document.getElementsByClassName("text-muted");
    seleccion=elementos[1];
    seleccion.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>';

    let arreglo = document.getElementsByTagName("p");
    arreglo[2].className=`d-none`;

    let tags=document.getElementsByTagName("svg");
    const images= [ {url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "camino"}, {url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "energia"}, {url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "papá"},{url:"https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , alt:"playa"} , {url:"https://images.unsplash.com/photo-1654045851484-d9aea271acda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:"bandera" },{url: "https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , alt: "trabajo" },{url: "https://images.unsplash.com/photo-1654046491755-20ef230f0add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "persona"},{url:"https://images.unsplash.com/photo-1654083843429-146101352678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", alt: "planta"},{url: "https://images.unsplash.com/photo-1654032693719-ada7186b1ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", alt: "buho"}];
    for(i=0;i<images.length;i++){
        let img=document.createElement('img');
        let image=images[i];
        img.setAttribute("width","100%");
        img.setAttribute("src",image.url);
        img.setAttribute("alt",image.alt);
        tags[1].replaceWith(img);

    }
    
}
ejecutarCodigo();
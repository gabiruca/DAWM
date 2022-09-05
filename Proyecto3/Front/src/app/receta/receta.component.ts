import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  calificacion=localStorage.getItem("calificacion");
  categoria=localStorage.getItem("categoria");
  descripcion=localStorage.getItem("descripcion");
  dificultad=localStorage.getItem("dificultad");
  subida=localStorage.getItem("subida");
  nombre=localStorage.getItem("nombre");
  pais=localStorage.getItem("pais");
  tiempo=localStorage.getItem("tiempo");

  imagenes=['camaronesA.jpg','carbonara.jpg','costillas.jpg','encebollado.jpg','esparragos.jpg','gazpacho.jpg','hummus.jpg','langostaR.jpg','linguini.jpg','mejillones.jpg','parmesan.jpg','salmon.jpg','tortillaC.jpg']
  imagen=this.imagenRd()
  constructor() { }

  ngOnInit(): void {
  }

  imagenRd(){
    return this.imagenes[Math.floor(Math.random() * this.imagenes.length)];
  }
}

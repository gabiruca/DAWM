import { Component, OnInit } from '@angular/core';
import { FiltrosService } from '../servicios/filtros.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  imagenes=['camaronesA.jpg','carbonara.jpg','costillas.jpg','encebollado.jpg','esparragos.jpg','gazpacho.jpg','hummus.jpg','langostaR.jpg','linguini.jpg','mejillones.jpg','parmesan.jpg','salmon.jpg','tortillaC.jpg']
  
  constructor(private filtrosService:FiltrosService) { }
  recetas=[]
  ngOnInit(): void {
    this.filtrosService.getRecetas().subscribe(data=>{
      this.recetas=data as any   
    })
  }

  imagenRd(){
    return this.imagenes[Math.floor(Math.random() * this.imagenes.length)];
  }
  guardarReceta(calificacion:any,categoria:string,descripcion:string,dificultad:string,subida:string,nombre:string,pais:string,tiempo:string){
    localStorage.setItem("calificacion",calificacion);
    localStorage.setItem("categoria",categoria);
    localStorage.setItem("descripcion",descripcion);
    localStorage.setItem("dificultad",dificultad);
    localStorage.setItem("subida",subida);
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("pais",pais);
    localStorage.setItem("tiempo",tiempo);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltrosService } from '../servicios/filtros.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias:any =[];
  dificultades:any =[];
  paises:any =[];
  constructor(private filtrosService:FiltrosService,private ruta:Router) { 

  }

  ngOnInit(): void {
    this.filtrosService.getAll().subscribe(data=>{
      this.categorias=data;
    })
    this.filtrosService.getAll1().subscribe(data=>{
      this.dificultades=data;
    })
    this.filtrosService.getAll2().subscribe(data=>{
      this.paises=data;
    })
  }
  guardarCategoria(filtro:string, seleccion:string){
    localStorage.setItem("filtro",filtro);
    localStorage.setItem("seleccion",seleccion);
  }
}

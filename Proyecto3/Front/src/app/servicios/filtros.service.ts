import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get<any>('http://localhost:3000/categorias')
  }
  getAll1():Observable<any> {
    return this.http.get<any>('http://localhost:3000/dificultades')
  }
  getAll2():Observable<any> {
    return this.http.get<any>('http://localhost:3000/paises')
  }
  getRecetas(){
    return this.http.get(`https://proyecto3-bc3c0-default-rtdb.firebaseio.com/Recetas.json`)
  }
}

import { Component } from '@angular/core';
import { FiltrosService } from './servicios/filtros.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto3';
  constructor(private filtrosService: FiltrosService) {}
  
}

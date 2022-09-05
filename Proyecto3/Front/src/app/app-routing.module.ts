import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { MainComponent } from './main/main.component';
import { RecetaComponent } from './receta/receta.component';
import { MenuComponent } from './menu/menu.component';
import { RecetasFComponent } from './recetas-f/recetas-f.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "main", component: MainComponent },
  { path: "menu", component: MenuComponent },
  { path: "receta", component: RecetaComponent },
  { path: "receta-f", component: RecetasFComponent },
  { path: "**", redirectTo: "splash" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

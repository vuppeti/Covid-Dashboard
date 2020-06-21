import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Route [] = [
  {path : '', component:CitiesComponent},
  {path : 'charts/:state', component: ChartsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

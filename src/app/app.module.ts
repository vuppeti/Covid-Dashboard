import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { ChartsComponent } from './charts/charts.component';
import { CoviddataService } from './coviddata.service';
import { HttpClientModule } from '@angular/common/http';

import { Route, RouterModule } from '@angular/router';
import { Charts1Component } from './charts1/charts1.component';



@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    ChartsComponent,
    Charts1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
   
  ],
  providers: [CoviddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

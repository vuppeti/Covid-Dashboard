import { Component, OnInit } from '@angular/core';
import { CoviddataService } from '../coviddata.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  stateData: any[];
  mhName: any;
  kolkata: any[];
  chennai: any[];
  bengaluru: any[];
  hyderabad: any[];
  ahmedabad: any[];

  constructor(private covidData:CoviddataService) { }

  ngOnInit(): void {
    this.covidData.getData().subscribe((data: any) => {
      console.log(data.statewise);
      this.stateData = data.statewise
     // console.log(data[20]['districtData'][16]);
     /* this.mhName = this.stateData[1].state;
      console.log(this.mhName);
      this.kolkata = data[36]['districtData'][11];
      this.chennai = data[32]['districtData'][5];
      this.bengaluru = data[16]['districtData'][4];
      this.hyderabad = data[31]['districtData'][4];
      this.ahmedabad = data[11]['districtData'][1];
      console.log(this.kolkata)*/
      for(let i=1 ; i<7 ; i++){
        
      }
    })
  }

}

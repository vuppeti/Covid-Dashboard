import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from  'node_modules/chart.js'
import { CoviddataService } from '../coviddata.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  datatable:any = [];
  datatable1 = [];
  datatable2:any = [];
  datatable3:any = [];
  datatable4:any = [];
  datatable5:any = [];    
  statesDaily: any= [];
  private sub: any;
  state:any;
  constructor(private route: ActivatedRoute ,  private covidData:CoviddataService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.state = params['state'].toLowerCase( ); 
      console.log(this.state)
   });
   this.covidData.getDaily().subscribe((data: any) => {
    this.statesDaily = data.states_daily;
    console.log(this.statesDaily[0][this.state]);
    for( let index = 60 ; index < 198 ; index++){
      if(this.statesDaily[index].status == this.statesDaily[0].status){
      this.datatable.push(this.statesDaily[index].date);
      this.datatable1.push (+ this.statesDaily[index][this.state]  );
      
      //index = index +13;
      }
      else if(this.statesDaily[index].status == this.statesDaily[1].status){
        //this.datatable1.push({label: this.statesDaily[index].date , value : this.statesDaily[index][this.state]  });
        //index = index +13;
        this.datatable2.push(this.statesDaily[index].date);
      this.datatable3.push (+ this.statesDaily[index][this.state]  );
        }
      else if(this.statesDaily[index].status == this.statesDaily[2].status){
         // this.datatable2.push({label: this.statesDaily[index].date , value : this.statesDaily[index][this.state]  });
          //index = index +13;
          this.datatable4.push(this.statesDaily[index].date);
          this.datatable5.push (+ this.statesDaily[index][this.state]  );
          }  
  
       }
       console.log(this.datatable1)
  })
  console.log(this.datatable)
   var myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: this.datatable,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Confirmed cases',
            data: this.datatable1,//[12, 19, 3, 5, 2, 3,5,2,5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
            borderWidth: 1
        }]  
        
    },
    
});
var myChart1 = new Chart("myChart1", {
  type: 'bar',
  data: {
      labels: this.datatable2,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: 'Recovered cases',
          data: this.datatable3,//[12, 19, 3, 5, 2, 3,5,2,5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
          borderWidth: 1
      }]  
      
  },
  
});
var myChart2 = new Chart("myChart2", {
  type: 'radar',
  data: {
      labels: this.datatable4,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: 'Deceased cases',
          data: this.datatable5,//[12, 19, 3, 5, 2, 3,5,2,5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
          borderWidth: 1
      }]  
      
  },
  
});
  }

}

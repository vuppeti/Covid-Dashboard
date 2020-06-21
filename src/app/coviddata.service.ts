import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('https://api.covid19india.org/data.json')
  }
  getDaily(){
    return this.http.get('https://api.covid19india.org/states_daily.json')
  }
}

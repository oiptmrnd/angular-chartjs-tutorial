import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19/1.0.0";
  token: string = "Bearer f2ea3162-c00d-3841-b7dd-8a8f53d2f92e";
  constructor(private http: HttpClient) { }

  getCountryResult() {

    return this.http.get(`${this.url}/country`, { headers: { Authorization: this.token } }).toPromise();




  }
}

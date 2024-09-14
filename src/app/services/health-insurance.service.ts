import { Injectable } from '@angular/core';
import { HealthInsurance } from '../interfaces/healthInsurance';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthInsuranceService {

  private myAppUrl: string;
  private myApiUrl: string;
  healthInsurances?: HealthInsurance[];
  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl='healthinsurance'
   }

   public getHealthInsurances(){
    return this.http.get<HealthInsurance[]>(`${this.myAppUrl}${this.myApiUrl}`)
   }
}

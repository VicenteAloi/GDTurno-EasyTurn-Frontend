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

  //  public getHealthInsurances(){
  //   return this.http.get<HealthInsurance[]>(`${this.myAppUrl}${this.myApiUrl}`)
  //  }

  public getHealthInsurances(){
    return this.healthInsurances = [
      {
        name: 'OSDE',
        healthInsuranceNumber: 1,
        healthInsurancePlan: 'Plan 1',
        healthInsuranceExpirationDate: '2021-12-01',
        patients: []
      },
      {
        name: 'Swiss Medical',
        healthInsuranceNumber: 2,
        healthInsurancePlan: 'Plan 2',
        healthInsuranceExpirationDate: '2021-12-01',
        patients: []
      },
      {
        name: 'Galeno',
        healthInsuranceNumber: 3,
        healthInsurancePlan: 'Plan 3',
        healthInsuranceExpirationDate: '2021-12-01',
        patients: []
      }
    ]
  }
  getHealthInsuranceByName(name: string){
    return this.healthInsurances?.find(hi => hi.name === name);
  }
}

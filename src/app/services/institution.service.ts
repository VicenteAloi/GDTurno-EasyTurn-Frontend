import { Injectable } from '@angular/core';
import { Institution } from '../interfaces/institution';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  private myAppUrl: string;
  private myApiUrl: string;
  institutions: Institution[] = [
    {
      idInstitution: 1,
      name: 'Hospital Alemán',
      institutionAddress: 'Av. Pueyrredón 1640, C1118 AAT, Buenos Aires',
      institutionAddressNumber:'1640',
      professionals:[]
    },
    {
      idInstitution: 2,
      name: 'Hospital Italiano',
      institutionAddress: 'Gascón 450, C1181ACH, Buenos Aires',
      institutionAddressNumber:'450',
      professionals:[]
    },
    {
      idInstitution: 3,
      name: 'Hospital Británico',
      institutionAddress: 'Perdriel 74, C1280AEB, Buenos Aires',
      institutionAddressNumber:'75',
      professionals:[]
    }
  ];
  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl='institution'
   }

  //  public getInstitutions(){
  //   return this.http.get<Institution[]>(`${this.myAppUrl}${this.myApiUrl}`)
  //  }
  public getInstitutions(){
    return this.institutions;
  }
}

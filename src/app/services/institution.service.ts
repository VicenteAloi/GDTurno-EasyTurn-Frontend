import { Injectable } from '@angular/core';
import { Institution } from '../interfaces/institution';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  private myAppUrl: string;
  private myApiUrl: string;
  
  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint
    this.myApiUrl='institution'
  }

  public getInstitutions():Observable<Institution[]>{
    return this.http.get<Institution[]>(`${this.myAppUrl}${this.myApiUrl}/`)
  }

}

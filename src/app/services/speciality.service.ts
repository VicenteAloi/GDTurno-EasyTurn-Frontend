import { Injectable } from '@angular/core';
import { Speciality } from '../interfaces/speciality';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  private myAppUrl?: string;
  private myApiUrl?: string;
  
  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl='speciality'
   }

   public getSpecialities(){
    return this.http.get<Speciality[]>(`${this.myAppUrl}${this.myApiUrl}/get-all-specialities`)
   }

}

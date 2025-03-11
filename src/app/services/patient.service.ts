import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';
import { environment } from '../environment/environment';
import { StoradgeService } from './storadge.service';
import { JwtService } from './jwt.service';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = environment.endpoint;
  private endPoint = 'patient/';

  constructor(private httpClient: HttpClient, private storadge: StoradgeService, private jwtService: JwtService) { }

  public getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.apiUrl}${this.endPoint}get-all-patients`);
  }

  public getPatientById(id: number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.apiUrl}${this.endPoint}get-patient/${id}`);
  }

  public addPatient(patient: Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.apiUrl}${this.endPoint}post`, patient);
  }

  public updatePatient(patient: Patient):Observable<Patient>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storadge.getToken()
    });
    return this.httpClient.put<Patient>(`${this.apiUrl}${this.endPoint}update-patient`, {
      headers: headers,
      body: patient
    });
  }

  public deletePatient(id: number):Observable<Patient>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storadge.getToken()
    });
    return this.httpClient.delete<Patient>(`${this.apiUrl}${this.endPoint}delete-patient/${id}`,{headers});
  }

  public getPatientLogued(token:string):Observable<Patient>{
    const id = this.jwtService.getIdUserFromToken(token);
    return this.getPatientById(id);
  }

  public getAppointmentsByPatientId(id:number):Observable<Appointment[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.storadge.getToken()
    });
    return this.httpClient.get<Appointment[]>(`${this.apiUrl}${this.endPoint}appointments/${id}`, {headers});
  }



}

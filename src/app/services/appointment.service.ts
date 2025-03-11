import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private myApiUrl = environment.endpoint;
  private endpoint = 'appointment/';

  constructor(private httpClient: HttpClient) { }

  public getById(id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.myApiUrl}${this.endpoint}get-appointment/${id}`);
  }


}

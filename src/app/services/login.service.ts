import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { UserLogin } from '../interfaces/userLogin';
import { Observable } from 'rxjs';
import { UserLogued } from '../interfaces/userLogued';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'auth/login';
   }

   public login(user: UserLogin): Observable<UserLogued> {
     return this.http.post<UserLogued>(`${this.myAppUrl}${this.myApiUrl}`, user);
   }
   
}

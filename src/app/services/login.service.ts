import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { UserLogin } from '../interfaces/userLogin';
import { Observable } from 'rxjs';
import { UserLogued } from '../interfaces/userLogued';
import { ResponseLogin } from '../interfaces/responses/responseLogin';

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

   public login(user: UserLogin): Observable<ResponseLogin> {
     return this.http.post<ResponseLogin>(`${this.myAppUrl}${this.myApiUrl}`, user);
   }
   
}

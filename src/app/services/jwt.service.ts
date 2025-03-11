import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { PayloadToken } from '../interfaces/responses/payload-token';


@Injectable({
  providedIn: 'root'
})


export class JwtService {

  constructor() { }

  public getRoleFromToken(token: string): string {
    const payload = jwtDecode(token) as PayloadToken;
    return payload.role
  }

  public isTokenExpired(token: string): boolean {
    const payload = jwtDecode(token) as PayloadToken;
    return Date.now() >= payload.exp * 1000;
  }

  public getIdUserFromToken(token: string): number {
    const payload = jwtDecode(token) as PayloadToken;
    return payload.idUser;
  }

 
}

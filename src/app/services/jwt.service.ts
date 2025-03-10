import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

interface Payload {
  role: string;
  iat: number;
  exp: number;
}


@Injectable({
  providedIn: 'root'
})


export class JwtService {

  constructor() { }

  public getRoleFromToken(token: string): string {
    const payload = jwtDecode(token) as Payload;
    return payload.role
  }
}

import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StoradgeService {
  constructor(
    private cookieService: CookieService
  ) { }

  public setToken(token: string): void {
    this.cookieService.set('token', token);
  }

  public getToken(): string | null {
    return this.cookieService.get('token') || null;
  }

  public removeToken(): void {
    this.cookieService.delete('token');
  }

}

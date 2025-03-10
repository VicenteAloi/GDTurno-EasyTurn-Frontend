import { CanActivateFn, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { inject } from '@angular/core';
import { StoradgeService } from '../services/storadge.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const jwtService = inject(JwtService);
  const storadgeService = inject(StoradgeService);
  const router = inject(Router);

  const token = storadgeService.getToken();

  console.log(token);

  if (!token) {
    router.navigate(['']);
    return false;
  }

  const role = jwtService.getRoleFromToken(token);

  if(route.url[0].path !== role.toLowerCase()) {
    router.navigate(['']);
    return false;
  }

  return true;
};

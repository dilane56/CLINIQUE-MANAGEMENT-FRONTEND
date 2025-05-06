// core/guards/auth.guard.ts
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CanActivateFn, Router} from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn()
    ? true
    : router.createUrlTree(['/auth/login']);
};


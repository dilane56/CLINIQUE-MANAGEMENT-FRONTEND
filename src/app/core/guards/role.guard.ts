// core/guards/role.guard.ts
import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data['role'];
  const userRole = authService.getUserRole();

  if (userRole !== requiredRole) {
    router.navigate(['/access-denied']);
    return false;
  }
  return true;
};

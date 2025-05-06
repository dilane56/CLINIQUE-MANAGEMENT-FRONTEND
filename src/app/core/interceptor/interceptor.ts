// core/interceptors/auth.interceptor.ts
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';
import {HttpInterceptorFn, provideHttpClient, withInterceptors} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};



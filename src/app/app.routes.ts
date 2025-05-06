import { Routes } from '@angular/router';
import {AUTH_ROUTES} from './auth/routes';
import {authGuard} from './core/guards/authguard';
import {roleGuard} from './core/guards/role.guard';
import {ADMIN_ROUTES} from './features/admin/admin.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: AUTH_ROUTES
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // 🔹 Redirige vers /login par defaut
  {
    path: 'admin',
    children :ADMIN_ROUTES

  },
  // {
  //   path: 'doctor',
  //   loadChildren: () => import('./features/doctor/routes'),
  //   canActivate: [roleGuard],
  //   data: { role: 'doctor' }
  // }

];

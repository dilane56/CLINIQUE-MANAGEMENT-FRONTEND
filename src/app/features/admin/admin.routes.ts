// admin/routes.ts
import {Routes} from '@angular/router';
import {roleGuard} from '../../core/guards/role.guard';


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.component')
      .then(m => m.AdminDashboardComponent),
    canActivate: [roleGuard],
    title: "ADMIN-DASHBOARD",
    data : {role :"ADMIN"}
  }
];

// admin/routes.ts
import {Routes} from '@angular/router';
import {roleGuard} from '../../core/guards/role.guard';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {UserAddComponent} from './components/user-add/user-add.component';


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.component')
      .then(m => m.AdminDashboardComponent),
    canActivate: [roleGuard],
    title: "ADMIN-DASHBOARD",
    data : {role :"ADMIN"},
    children: [  // 🔹 Sous-routes affichées dans `router-outlet`
      { path: 'users/add', component: UserAddComponent },  // 🔹 Dashboard par défaut
      { path: 'users', component: UserManagementComponent },
    ]

  }
];

import {Component} from '@angular/core';
import {MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable, MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../shared/models/user';
import {Roles} from '../../../../shared/models/enum/roles';
import {Sexe} from '../../../../shared/models/enum/sexe';
import {MATERIAL_MODULES} from '../../../../shared/material';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-user-management',
  imports: [
    MATERIAL_MODULES,
  ],
  templateUrl: './user-management.component.html',
  standalone: true,
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>([
    {
      nom: 'Jean Dupont', email: 'jean@example.com', role: Roles.ADMIN, password: "",
      id: 0n,
      username: '',
      prenom: '',
      telephone: '',
      sexe: Sexe.Masculin,
      addresse: ''
    },
    {
      nom: 'Claire Martin', email: 'claire@example.com', role: Roles.PATIENT,
      id: 0n,
      username: '',
      prenom: '',
      password: '',
      telephone: '',
      sexe: Sexe.Masculin,
      addresse: ''
    },
  ]);

  addUser() {
    console.log("Ajouter un utilisateur");
  }

  editUser(user: User) {
    console.log("Modifier l'utilisateur :", user);
  }

  deleteUser(user: User) {
    console.log("Supprimer l'utilisateur :", user);
  }

}

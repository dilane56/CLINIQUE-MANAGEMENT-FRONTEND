import {Component, OnInit} from '@angular/core';
import {
 MatCellDef, MatColumnDef,
 MatHeaderCellDef,

  MatHeaderRowDef,
 MatRowDef,

  MatTableDataSource
} from '@angular/material/table';
import {User} from '../../../../shared/models/user';
import {Roles} from '../../../../shared/models/enum/roles';
import {Sexe} from '../../../../shared/models/enum/sexe';
import {MATERIAL_MODULES} from '../../../../shared/material';
import {MatSort} from '@angular/material/sort';
import UserService from '../../../../core/services/user.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-management',
  imports: [
    MATERIAL_MODULES,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatColumnDef,
    MatCellDef,
    MatSort,
    NgForOf,
  ],
  templateUrl: './user-management.component.html',
  standalone: true,
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements  OnInit{
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>();
  user! :User;
  users!: User[]; // 🔹 Propriété pour stocker les utilisateurs

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(); // 🔹 Charge les utilisateurs au démarrage
    this.user = this.dataSource.data[0]; // 🔹 Initialise l'utilisateur avec le premier élément de la liste
  }

  loadUsers(): void {
    const cachedUsers = sessionStorage.getItem('users');
    if (cachedUsers) {
      console.log("returning cached users");
      this.dataSource.data = JSON.parse(cachedUsers);
      this.users = this.dataSource.data;
      console.log(this.dataSource.data);
      console.log(this.users);
      return;
    }else{
      this.userService.getUsers().subscribe({
        next: data => {
          this.dataSource.data = data;
          this.users = data;
          console.log(this.dataSource.data);
          console.log(this.users);
        },
        error: err => {
          console.log(err);
        }
      })
    }

  }
 // protected readonly of = of;

  addUser(user: User): void {
   // this.userService.createUser(user).subscribe(() => this.loadUsers());
  }

  editUser(user: User): void {
   // this.userService.updateUser(user).subscribe(() => this.loadUsers());
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => this.loadUsers());
  }


}

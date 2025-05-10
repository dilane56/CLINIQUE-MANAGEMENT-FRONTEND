import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user';
import UserService from '../../../../core/services/user.service';
import {UserAdd} from '../../../../shared/models/userAdd';
import {Router} from '@angular/router';
import {
  MatCell,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard} from '@angular/material/card';
import {MatPaginator} from '@angular/material/paginator';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-user-management',
  imports: [
    MatCell,
    MatHeaderCell,
    MatTable,
    MatIcon,
    MatToolbar,
    MatCard,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatRowDef

  ],
  templateUrl: './user-management.component.html',
  standalone: true,
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements  OnInit{
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>();
  user! :UserAdd;
  users!: User[]; // 🔹 Propriété pour stocker les utilisateurs

  constructor(private userService: UserService, private router: Router) {}

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
          sessionStorage.setItem('users', JSON.stringify(data));
          this.dataSource.data = data;
          this.users = data;
          console.log(this.dataSource.data);
        },
        error: err => {
          console.log(err);
        }
      })
    }

  }
 // protected readonly of = of;

  addUser(user: UserAdd): void {
    this.router.navigateByUrl("admin/user/add");
   // this.userService.createUser(user).subscribe(() => this.loadUsers());
  }

  editUser(user: User): void {
   // this.userService.updateUser(user).subscribe(() => this.loadUsers());
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      {
        next : data =>{
          this.loadUsers();

        },
        error: err => {
          console.log(err);
        }
      }
    );
  }


}

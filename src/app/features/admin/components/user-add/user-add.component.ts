import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MATERIAL_MODULES} from '../../../../shared/material';
import UserService from '../../../../core/services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../shared/models/user';
import {NgIf} from '@angular/common';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-add',
  imports: [
    MATERIAL_MODULES,
    ReactiveFormsModule,
    NgIf,
  ],
  providers: [
    provideMomentDateAdapter(), // 🔹 Adapter pour gérer les dates
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'} // 🔹 Locale en français
  ],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  userForm!: FormGroup;
  dataSource = new MatTableDataSource<User>();

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      role: [''],
      sexe: [''],
      specialite: [''],
      dateNaissance: [''],


    });
  }

  getUserType(role: string): string {
    switch (role) {
      case 'PATIENT':
        return 'Patient';
      case 'MEDECIN':
        return 'Médecin';
      case 'ADMIN':
        return 'Administrateur';
      default:
        return 'Utilisateur';
    }

  }

  editUser(user: any): void {
    this.userForm.patchValue(user);
  }

  cancelAdd(): void {
    this.router.navigateByUrl("/admin/users");
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.dataSource.data = users.map(user => ({
        ...user,
        type: this.getUserType(user.role) // 🔹 Ajoute un type pour gérer les champs spécifiques
      }));
    });
  }


  submitForm(): void {
    const newUser = this.userForm.value;
    if (this.userForm.value.role === 'PATIENT') {
      this.userService.createPatient(newUser).subscribe(() => {
        // 🔹 Récupérer les utilisateurs déjà stockés
        const users = JSON.parse(sessionStorage.getItem('users') || '[]');

        // 🔹 Ajouter le nouvel utilisateur à la liste
        users.push(newUser);

        // 🔹 Mettre à jour le cache
        sessionStorage.setItem('users', JSON.stringify(users));

        // 🔹 Afficher un message de succès et rediriger
        this.showSuccessMessage();
      });


    }
    if (this.userForm.value.role === 'ADMIN') {
      this.userService.createAdmin(newUser).subscribe(() => {
        const users = JSON.parse(sessionStorage.getItem('users') || '[]');
        users.push(newUser);
        sessionStorage.setItem('users', JSON.stringify(users));
        this.showSuccessMessage();
      });


    }
      if (this.userForm.value.role === 'MEDECIN') {
        this.userService.createMedecin(newUser).subscribe(() => {
          const users = JSON.parse(sessionStorage.getItem('users') || '[]');
          users.push(newUser);
          sessionStorage.setItem('users', JSON.stringify(users));
          this.showSuccessMessage();
        });
      }
      if (this.userForm.value.role === 'SECRETAIRE') {
        this.userService.createAdmin(newUser).subscribe(() => {
          const users = JSON.parse(sessionStorage.getItem('users') || '[]');
          users.push(newUser);
          sessionStorage.setItem('users', JSON.stringify(users));
          this.showSuccessMessage();
        });
      }
    }
  showSuccessMessage(): void {
    this.snackBar.open('Utilisateur ajouté avec succès !', 'Fermer', {
      duration: 3000, // 🔹 Affiche le message pendant 3 secondes
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'] // 🔹 Ajoute un style personnalisé
    });

    setTimeout(() => {
      this.router.navigate(['/admin/users']); // ✅ Redirige vers la liste des utilisateurs
    }, 3000);
  }



}

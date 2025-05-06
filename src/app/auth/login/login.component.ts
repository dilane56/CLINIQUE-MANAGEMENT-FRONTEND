import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput, MatInputModule} from '@angular/material/input';
import {AuthService} from '../../core/services/auth.service';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {Router, RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    // Modules Material (obligatoires pour mat-label)
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIcon,
    NgIf,
    RouterOutlet,

  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit {
  loginForm!: FormGroup; // Déclaration du formulaire

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {


      this.authService.login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log("Connexion réussie, token reçu.");
           // localStorage.setItem('token', res.token);
            this.router.navigateByUrl(
              this.authService.getDefaultRoute()
            );
            alert("Connexion réussie !");
          },
          error: (err) => {
            console.error('Erreur de connexion:', err);
            alert("Échec de connexion !");
          }
        });
    }
  }



    // submitForm(): void {
    //   if (this.loginForm.valid) {
    //     console.log('Données envoyées :', this.loginForm.value);
    //   } else {
    //     console.log('Formulaire invalide');
    //   }
    // }




  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // ✅ Champ email avec validation
      password: ['', [Validators.required, Validators.minLength(6)]] // ✅ Mot de passe sécurisé
    });

  }


}


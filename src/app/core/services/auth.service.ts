import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/models/user';
import {jwtDecode} from 'jwt-decode';
import {LoginRequest} from '../../auth/model/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl : string ='http://localhost:9001/api/auth'
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  authStatus$ = this.isAuthenticated.asObservable();
  private currentUserSubject = signal<User | null>(null);
  currentUser = this.currentUserSubject.asReadonly();

  constructor(private http: HttpClient) {}



  login(login : LoginRequest): Observable<{token : string, role :string}> {
    return this.http.post<{ token: string, role :string }>(`${this.apiUrl}/login`, login).pipe(
      tap((res) => {
        console.log(res)
        localStorage.setItem('token', res.token); // ✅ Stocke le token JWT
        localStorage.setItem('role', res.role);
        console.log( this.getUserFromToken())
        this.isAuthenticated.next(true); // ✅ Met à jour le statut de connexion
        console.log( this.getUserFromToken())

      })
    );
  }

  getDefaultRoute(): string {
    const role = localStorage.getItem('role');
    switch(role) {
      case 'ADMIN': return '/admin';
      case 'MEDECIN': return '/doctor/appointments';
      case 'SECRETAIRE': return '/secretary/patients';
      default: return '/login';
    }
  }

  logout(): void {
    localStorage.removeItem('token'); // Supprime le token
    this.isAuthenticated.next(false); // Met à jour le statut d'authentification
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Vérifie si le token est stocké
  }
  getToken(): string | null {
    return localStorage.getItem('token'); // Retourne le token ou null
  }
  getUserFromToken(): any {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return jwtDecode(token); // 🔹 Décodage du token JWT
  }
  getUserRole():string
  {
    const  role  = localStorage.getItem('role');
    if(!role) return "";
    return role
  }

}

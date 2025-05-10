import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {User} from '../../shared/models/user';
import {UserAdd} from '../../shared/models/userAdd';


@Injectable({
  providedIn: 'root',
})
export default class  UserService{
  private apiUrl : string ='http://localhost:9001/api';
  private Users : User[] = []; // 🔹 Propriété pour stocker les utilisateurs
  private usersCache = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    if (this.usersCache.value.length > 0) {
      console.log("returning cached users");
      return this.usersCache.asObservable(); // 🔹 Retourne les données en cache sans appel API
    }

    return this.http.get<User[]>(this.apiUrl+"/utilisateurs/all").pipe(
      tap(users => this.usersCache.next(users)) // 🔹 Met en cache les données après récupération
    );

  }

  createPatient(user: UserAdd): Observable<User> {
    console.log(user)
    return this.http.post<User>(this.apiUrl+"/patient/create", user); // 🔹 Crée un utilisateur
  }
  createMedecin(user: UserAdd): Observable<User> {
    return this.http.post<User>(this.apiUrl+"/medecin/create", user); // 🔹 Crée un utilisateur
  }
  createSecretaire(user: UserAdd): Observable<User> {
    return this.http.post<User>(this.apiUrl+"/secretaire/create", user); // 🔹 Crée un utilisateur
  }
  createAdmin(user: UserAdd): Observable<User> {
    return this.http.post<User>(this.apiUrl+"/administrateur/create", user); // 🔹 Crée un utilisateur
  }

  // updateUser(user: User): Observable<User> {
  //   return this.http.put<User>(`${this.apiUrl}/${user.id}`, user); // 🔹 Met à jour un utilisateur
  // }

  deleteUser(userId: number): Observable<void> {
    console.log("suppression de l'utilsateur avec l' ID :"+userId)
    return this.http.delete<void>(`${this.apiUrl}/utilisateurs/${userId}`); // 🔹 Supprime un utilisateur
  }


}

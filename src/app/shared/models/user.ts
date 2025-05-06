import {Sexe} from './enum/sexe';
import {Roles} from './enum/roles';

export interface User{
  id : bigint
  email : string,
  username : string,
  nom : string,
  prenom : string,
  password : string,
  telephone : string,
  sexe : Sexe,
  addresse : string,
  role :Roles
}

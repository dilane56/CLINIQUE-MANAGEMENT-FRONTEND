import {Sexe} from './enum/sexe';

export interface UserAdd{
  username: string,
  password : string,
  email: string,
  sexe:Sexe,
  
}

import {UserAdd} from './userAdd';

export interface PatientAdd extends UserAdd{
  numeroDosierMedical : bigint,
  dateNaissance : Date

}

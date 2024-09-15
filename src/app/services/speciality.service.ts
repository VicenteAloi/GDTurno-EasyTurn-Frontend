import { Injectable } from '@angular/core';
import { Speciality } from '../interfaces/speciality';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  // private myAppUrl: string;
  // private myApiUrl: string;
  specialities: Speciality[] = [
    {
      idSpeciality: 1,
      name: 'Cardiología',
      specialityDescription:'Especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades del corazón y del aparato circulatorio.',
      professionals:[],
      appointments:[]
    },
    {
      idSpeciality: 2,
      name: 'Dermatología',
      specialityDescription:'Especialidad médica que se encarga del estudio de la estructura y función de la piel, así como de las enfermedades que la afectan, su diagnóstico, prevención y tratamiento.',
      professionals:[],
      appointments:[]
    },
    {
      idSpeciality: 3,
      name: 'Ginecología',
      specialityDescription:'Especialidad médica y quirúrgica que se ocupa del cuidado del aparato reproductor femenino y de las mamas.',
      professionals:[],
      appointments:[]
    }
  ];
  // constructor(private http: HttpClient) {
  //   this.myAppUrl= environment.endpoint;
  //   this.myApiUrl='speciality'
  //  }

  //  public getSpecialities(){
  //   return this.http.get<Speciality[]>(`${this.myAppUrl}${this.myApiUrl}`)
  //  }
  public getSpecialities(){
    return this.specialities;
  }
}

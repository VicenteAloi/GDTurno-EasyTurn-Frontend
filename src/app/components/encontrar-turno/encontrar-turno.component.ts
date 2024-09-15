import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Speciality } from '../../interfaces/speciality';
import { Institution } from '../../interfaces/institution';
import { HealthInsurance } from '../../interfaces/healthInsurance';
import { SpecialityService } from '../../services/speciality.service';
import { HealthInsuranceService } from '../../services/health-insurance.service';
import { InstitutionService } from '../../services/institution.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgForOf } from '@angular/common';
import { FilterPipe } from "../../pipes/filter.pipe";



@Component({
  selector: 'app-encontrar-turno',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule,FormsModule ,FilterPipeModule, NgForOf, FilterPipe],
  templateUrl: './encontrar-turno.component.html',
  styleUrl: './encontrar-turno.component.css'
})
export default class EncontrarTurnoComponent {
 
  filterSpeciality:string='';
  filterInstitutions:string='';
  filterHealthIncurances:string='';

  specialities: Speciality[] =[];
  institutions: Institution[] =[];
  healthInsurances: HealthInsurance[] =[];
  
  findAppointment: FormGroup;
  constructor(
    private specialityService: SpecialityService,
    private healthInsuranceService: HealthInsuranceService,
    private institutionService: InstitutionService
  ){
    // Traigo la lista de especialidades completa
    // this.specialityService.getSpecialities().subscribe((value)=> {
    //   this.specialities = value
    // })
    this.specialities = this.specialityService.getSpecialities();
    console.log(this.specialities)

    // Traigo la lista de obras sociales completa
    // this.healthInsuranceService.getHealthInsurances().subscribe((value)=> {
    //   this.healthInsurances = value
    // })
    this.healthInsurances = this.healthInsuranceService.getHealthInsurances();
    
    // Traigo la lista de especialidades completa
    // this.institutionService.getInstitutions().subscribe((value)=> {
    //   this.institutions = value
    // })
    this.institutions = this.institutionService.getInstitutions();

    this.findAppointment = new FormGroup({
      institution: new FormControl<String>(""),
      speciality: new FormControl<String>(""),
      HealthInsurance: new FormControl<String>("")
    });
  }

  findProperties(){
    console.log(this.findAppointment.value)
  }
  
  setHealthInsurance(healthInsurance: HealthInsurance){
    this.findAppointment.controls['HealthInsurance'].setValue(healthInsurance.name)
  }
  setInstitution(institution: Institution){
    this.findAppointment.controls['institution'].setValue(institution.name)
  }
  setEspeciality(speciality: Speciality){
    this.findAppointment.controls['speciality'].setValue(speciality.name)
  }
}

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
import { NgForOf, NgIf } from '@angular/common';
import { FilterPipe } from "../../pipes/filter.pipe";
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";
import { ToastrService } from 'ngx-toastr';
import { FindAppointmentsListComponent } from "../find-appointments-list/find-appointments-list.component";
import { Professional } from '../../interfaces/professional';



@Component({
  selector: 'app-search-turn',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule, FilterPipeModule, NgForOf, FilterPipe, RouterLink, FooterComponent, FindAppointmentsListComponent],
  templateUrl: './search-turn.component.html',
  styleUrl: './search-turn.component.css'
})
export default class EncontrarTurnoComponent {
  professionalList: any [] = [];
 
  filterSpeciality:string='';
  filterInstitutions:string='';
  filterHealthIncurances:string='';

  specialities: Speciality[] = [];
  institutions: Institution[] =[];
  healthInsurances: HealthInsurance[] =[];
  
  findAppointment: FormGroup;
  constructor(
    private specialityService: SpecialityService,
    private healthInsuranceService: HealthInsuranceService,
    private institutionService: InstitutionService,
    private toastr: ToastrService
  ){

    this.specialityService.getSpecialities()
    .subscribe({
      next: (value) => {
        this.specialities = value
        console.log( this.specialities)
      },
      error: (error: Observable<String>) => {
        console.log(error)
    }
  });


    this.healthInsuranceService.getHealthInsurances()
      .subscribe({
        next: (value) => {
          this.healthInsurances = value
          console.log(this.healthInsurances)
        },
        error: (error: Observable<String>) => {
          console.log(error)
      }
    });
  
    this.institutionService.getInstitutions()
      .subscribe({
        next: (value) => {
          this.institutions = value
          console.log(this.institutions)
        },
        error: (error: Observable<String>) => {
          console.log(error)
      }
    });

    this.findAppointment = new FormGroup({
      institution: new FormControl<String>(""),
      speciality: new FormControl<String>(""),
      HealthInsurance: new FormControl<String>("")
    });
  }

  findProperties(){
    if(this.findAppointment.value.institution !== ""){
      const institution = this.institutions.find(i => i.name === this.findAppointment.value.institution)
      console.log(institution)
    }
    if(this.findAppointment.value.speciality !== ""){
      const speciality = this.specialities.find(s => s.name === this.findAppointment.value.speciality)
      console.log(speciality)
    }
    if(this.findAppointment.value.HealthInsurance !== ""){
      const healthInsurance = this.healthInsurances.find(hi => hi.name === this.findAppointment.value.HealthInsurance)
      console.log(healthInsurance)
    }
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

  public onSubmit():void{
    if(this.findAppointment.value.institution === "" && this.findAppointment.value.speciality === "" && this.findAppointment.value.HealthInsurance === ""){
      this.toastr.warning('Por favor, seleccione al menos un filtro para buscar un turno', 'Filtros vacíos', {
        timeOut: 1000,})
    }else{
      this.professionalList.push({
            idProfessional:12,
            professionalRegistration:"asdasdasd",
            professionalName:"asdasdasdasd",
            institutions:[
              {
                idInstitution:1,
                name:"asdasd",
                address:"asdasd",
                phone:"asdasd",
                email:"asdasd"
              }
            ],
            specialities:"asdasdasdasd",
      })
      console.log(this.findAppointment.value)
    }
  }
}

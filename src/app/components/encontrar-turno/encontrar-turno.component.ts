import { Component, PipeTransform } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { transcode } from 'buffer';
import { Speciality } from '../../interfaces/speciality';
import { Institution } from '../../interfaces/institution';
import { HealthInsurance } from '../../interfaces/healthInsurance';
import { SpecialityService } from '../../services/speciality.service';
import { HealthInsuranceService } from '../../services/health-insurance.service';
import { InstitutionService } from '../../services/institution.service';



@Component({
  selector: 'app-encontrar-turno',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
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
  
  constructor(
    private specialityService: SpecialityService,
    private healthInsuranceService: HealthInsuranceService,
    private institutionService: InstitutionService
  ){
    // Traigo la lista de especialidades completa
    this.specialityService.getSpecialities().subscribe((value)=> {
      this.specialities = value
    })

    // Traigo la lista de obras sociales completa
    this.healthInsuranceService.getHealthInsurances().subscribe((value)=> {
      this.healthInsurances = value
    })

    // Traigo la lista de especialidades completa
    this.institutionService.getInstitutions().subscribe((value)=> {
      this.institutions = value
    })
  }



  

  
}

import { Component, PipeTransform } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { transcode } from 'buffer';



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

  specialities =[
    "Especialidad 1",
    "Especialidad 2",
    "Especialidad 3",
    "..."
  ];
  institutions: string[] =[
    "Institucion 1",
    "Institucion 2",
    "Institucion 3",
    "..."
  ];
  healthInsurances: string[] =[
    "Obra Social 1",
    "Obra Social 2",
    "Obra Social 3",
    "..."
  ];
  




  

  
}

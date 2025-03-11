
import { Component } from '@angular/core';
import { SlideBarComponent } from "../slide-bar/slide-bar.component";
import { StoradgeService } from "../../services/storadge.service";
import { Router, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../interfaces/patient';
import { ResponseError } from '../../interfaces/responseError';
import { Appointment } from '../../interfaces/appointment';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-patient-portal',
  standalone: true,
  imports: [
    SlideBarComponent,
    RouterOutlet
],
  templateUrl: './patient-portal.component.html',
  styleUrl: './patient-portal.component.css'
})
export class PatientPortalComponent {

  isSidebarVisible = true;
  isSubmenuOpen = false;
  isDashboardSelected = false;

  spinnerVisible = true;

  currentPatient?: Patient;
  appointments: Appointment[] = [];

  constructor(
    private storadgeService: StoradgeService,
    private router: Router,
    private toastr: ToastrService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    const token = this.storadgeService.getToken();
    this.patientService.getPatientLogued(token!).subscribe(
      (response) => {
        this.currentPatient = response;
        console.log(response);
      },
      (error:ResponseError) => {
        this.toastr.error('Error',error.message);
        console.log(error);
      }
    );
  }



  public logOut():void {
    this.storadgeService.removeToken();
    this.toastr.success('Autenticacion','Sesión cerrada correctamente');
    this.router.navigate(['/']);
  }


}

import { Component, Input } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../interfaces/patient';
import { Appointment } from '../../interfaces/appointment';
import { NgFor } from '@angular/common';
import { StoradgeService } from '../../services/storadge.service';
import { JwtService } from '../../services/jwt.service';
import { ResponseError } from '../../interfaces/responseError';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  currentPatient?: Patient;
  appointments: Appointment[] = [];
  isSpinnerVisible = true;

  constructor(
    private patientService: PatientService, 
    private storadgeService: StoradgeService,
    private toastr: ToastrService,
    private router: Router,
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
      setTimeout(() => {
        this.patientService.getAppointmentsByPatientId(this.currentPatient!.idPatient).subscribe(
          (response:Appointment[]) => {
            this.appointments = response;
            console.log(response);
          },
          (error:ResponseError) => {
            this.toastr.error('Error',error.message);
            console.log(error);
          }
        );
        this.isSpinnerVisible = false;
      }
      , 3000);
    }


    public updateAppointment(id:number){

      this.router.navigate(['patient/form-modify/'+id]);

    }

}

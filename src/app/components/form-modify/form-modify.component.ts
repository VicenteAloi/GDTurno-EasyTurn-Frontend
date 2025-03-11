import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../interfaces/appointment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-modify',
  standalone: true,
  imports: [],
  templateUrl: './form-modify.component.html',
  styleUrl: './form-modify.component.css'
})
export class FormModifyComponent {

  constructor(
    private appointmentService: AppointmentService,
    private router:ActivatedRoute
  ) { }

  appointment?:Appointment;
  appointmentId?:number;

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.appointmentId = params['id'];
    });
    
    this.appointmentService.getById(this.appointmentId!).subscribe(appointment => {
      this.appointment = appointment;
    });
  }




}

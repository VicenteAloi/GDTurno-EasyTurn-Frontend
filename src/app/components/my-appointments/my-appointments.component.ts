import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent {

}

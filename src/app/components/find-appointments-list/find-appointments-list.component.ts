import { Component, Input } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { Professional } from '../../interfaces/professional';

@Component({
  selector: 'app-find-appointments-list',
  standalone: true,
  imports: [],
  templateUrl: './find-appointments-list.component.html',
  styleUrl: './find-appointments-list.component.css'
})
export class FindAppointmentsListComponent {

  @Input() professionalsList: Professional[] = [];

}

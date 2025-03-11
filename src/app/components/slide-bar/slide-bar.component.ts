import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.css'
})
export class SlideBarComponent {
  @Output () logOut: EventEmitter<boolean> = new EventEmitter(false);

  @Input()
  currentPatient?: Patient;

  isSidebarVisible = true;
  isSubmenuOpen = false;
  isDashboardSelected = false;

  constructor() { }


}

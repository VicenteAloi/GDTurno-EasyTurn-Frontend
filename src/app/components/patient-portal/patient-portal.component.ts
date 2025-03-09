
import { Component } from '@angular/core';
import { SlideBarComponent } from "../slide-bar/slide-bar.component";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-patient-portal',
  standalone: true,
  imports: [
    SlideBarComponent,
    TableComponent
],
  templateUrl: './patient-portal.component.html',
  styleUrl: './patient-portal.component.css'
})
export class PatientPortalComponent {

  isSidebarVisible = true;
  isSubmenuOpen = false;
  isDashboardSelected = false;

  constructor() { }


}

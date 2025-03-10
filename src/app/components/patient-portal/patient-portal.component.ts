
import { Component } from '@angular/core';
import { SlideBarComponent } from "../slide-bar/slide-bar.component";
import { TableComponent } from "../table/table.component";
import { StoradgeService } from "../../services/storadge.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private storadgeService: StoradgeService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  public logOut():void {
    this.storadgeService.removeToken();
    this.toastr.success('Autenticacion','Sesión cerrada correctamente');
    this.router.navigate(['/']);
  }


}

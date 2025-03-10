import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.css'
})
export class SlideBarComponent {
  @Output () logOut: EventEmitter<boolean> = new EventEmitter(false);

  isSidebarVisible = true;
  isSubmenuOpen = false;
  isDashboardSelected = false;

  constructor() { }


}

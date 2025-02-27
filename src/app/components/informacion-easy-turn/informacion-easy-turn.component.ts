import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-informacion-easy-turn',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './informacion-easy-turn.component.html',
  styleUrl: './informacion-easy-turn.component.css'
})
export default class InformacionEasyTurnComponent {

}

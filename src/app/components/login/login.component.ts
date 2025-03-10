import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

import { ResponseError } from '../../interfaces/responseError';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponseLogin } from '../../interfaces/responses/responseLogin';
import { StoradgeService } from '../../services/storadge.service';
import { JwtService } from '../../services/jwt.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  messageWarningEmail: string = "el campo email es requerido";
  messageWarningPassword: string = "El campo contraseña es requerido";
  role: string = 'PATIENT';

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private toastr: ToastrService, 
    private activateRouter: ActivatedRoute, 
    private router: Router,
    private StoradgeService: StoradgeService,
    private JwtService: JwtService
  ) {

    this.activateRouter.params.subscribe(params => {
      this.role = params['role'].toUpperCase();
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: [this.role]
    });
  }

  public onSubmit():void {
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe(
        (response:ResponseLogin) => {
          console.log(response);
          this.StoradgeService.setToken(response.token);
          let role = this.JwtService.getRoleFromToken(response.token);
          role = role.toLowerCase();
          if(role === 'patient'){
            this.router.navigate([role]);
          }else{
            this.router.navigate([role]);
          }
          this.router.navigate([role]);
          this.toastr.success('Bienvenido', 'Inicio de sesión correcto');
        },
        (error:ResponseError) => {
          this.toastr.error(error.message, 'Error de autenticación');
        }
      );
    }
   };
}


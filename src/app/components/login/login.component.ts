import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

import { ResponseError } from '../../interfaces/responseError';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponseLogin } from '../../interfaces/responses/responseLogin';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  messageWarningEmail: string = "el campo email es requerido";
  messageWarningPassword: string = "El campo contraseña es requerido";

  constructor(private fb: FormBuilder, private loginService: LoginService, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['PATIENT']
    });
  }

  public onSubmit():void {
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe(
        (response:ResponseLogin) => {
          console.log(response);
          this.toastr.success('Bienvenido', 'Inicio de sesión correcto');
        },
        (error:ResponseError) => {
          this.toastr.error(error.message, 'Error de autenticación');
        }
      );
    }
   };

}


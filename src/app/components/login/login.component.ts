import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

import { UserLogued } from '../../interfaces/userLogued';
import { ResponseError } from '../../interfaces/responseError';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  error?:ResponseError;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
        this.loginService.login(this.loginForm.value).subscribe(
          {
            next: (response:UserLogued) => {
              console.log(response);
            },
            error: (error) => {
                console.log(error);
                this.error = error;
                setTimeout(() => {
                  this.error = undefined;
                }, 3500);
            }
          }
        );

    }};

}


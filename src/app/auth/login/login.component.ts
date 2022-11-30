import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { customEmailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, customEmailValidator]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });

  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  touchedAndInvalid(control: string) {
    let current = this.loginFormGroup.controls[`${control}`];
    return current.touched && current.invalid;
  }

  isRequired(control: string) {
    let current = this.loginFormGroup.controls[`${control}`]
    return current.errors?.['required'];
  }

  hasMinLength(control: string) {
    let current = this.loginFormGroup.controls[`${control}`];
    return current.errors?.['minlength'];
  }

  isInvalid(email: string) {
    return this.loginFormGroup.controls[`${email}`].errors?.['emailError'];
  }

  login() {
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      complete: () => {
        console.log('login stream completed.')
      },
      error: (err) => {
        this.errorMessage = err.error.errorMessage;
      }
    });
  }
}

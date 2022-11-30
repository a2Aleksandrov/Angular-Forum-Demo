import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { customEmailValidator, passwordsMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, customEmailValidator]),
    'select-tel': new FormControl(null),
    tel: new FormControl(null),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl(null, [passwordsMatch(this.passwordControl)])
    })
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  touchedAndInvalid(control: string) {
    let current;
    if (control == 'password') {
      current = this.passwordsGroup.controls[`${control}`];
    } else {
      current = this.registerFormGroup.controls[`${control}`];
    }
    return current.touched && current.invalid;
  }

  isRequired(current: string) {
    if (current == 'password') {
      return this.passwordsGroup.controls[`${current}`].errors?.['required'];
    }
    return this.registerFormGroup.controls[`${current}`].errors?.['required'];
  }

  hasMinLength(current: string) {
    if (current == 'password') {
      return this.passwordsGroup.controls[`${current}`].errors?.['minlength'];
    }
    return this.registerFormGroup.controls[`${current}`].errors?.['minlength'];
  }

  isInvalid(control: string) {
    return this.registerFormGroup.controls[`${control}`].errors?.['emailError'];
  }

  passwordsCheck(rePassword: string) {
    return this.passwordsGroup.controls[`${rePassword}`].errors?.['doesNotMatch'];
  }

  register() {
    this.authService.register(this.registerFormGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

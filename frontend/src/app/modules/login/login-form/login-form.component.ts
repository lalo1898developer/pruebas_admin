import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  private role: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {

    this.myForm = new FormGroup({
      'inputEmail': this.emailFormControl,
      'inputPassword': this.passwordFormControl
    });
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/roles']);
      return false;
    }
  }

  onSubmit() {
    this.authenticationService.login(this.myForm.get('inputEmail').value).subscribe(
      response => {
        Swal.fire({
          title: 'Login!',
          text: 'Acceso aceptado',
          icon: 'success',
          timer: 2000,
          onAfterClose: () => {
            this.router.navigate(['/roles']);
          }
        });
      },
      errorObject => {
        // TODO: Desplegar una pantalla modal informando del error
        Swal.fire({
          title: 'Login Error!',
          text: 'Error',
          icon: 'error',
        });
      });
  }
}

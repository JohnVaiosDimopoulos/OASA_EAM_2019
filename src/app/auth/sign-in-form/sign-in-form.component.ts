import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  SignInForm: FormGroup;
  successMessage = null;
  errorMessage = null;
  SignInDone = false;


  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.SignInForm = this.fb.group(
      {
        ['email']: this.fb.control('', [ Validators.email, Validators.required]),
        ['password']: this.fb.control('',[ Validators.required, Validators.minLength(8)])
      }
    );
  }

  onSubmit() {
    this.auth.doLogin(this.SignInForm.get('email').value, this.SignInForm.get('password').value).then(
      res => {
        this.successMessage = 'Συνδεθήκατε Επιτυχώς';
      },
      err => {
        this.errorMessage = 'Λάθος email ή κωδικός';
      }
    );
    this.SignInDone = true;
  }

}

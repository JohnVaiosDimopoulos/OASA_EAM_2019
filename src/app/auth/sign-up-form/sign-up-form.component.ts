import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {UserModel} from '../User.model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  SignUpForm: FormGroup;
  successMessage = null;
  errorMessage = null;
  SignUpDone = false;


  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.SignUpForm = this.fb.group(
      {
        ['email']: this.fb.control('', [ Validators.email, Validators.required]),
        ['password']: this.fb.control('',
          [ Validators.required, Validators.minLength(8)]),
        ['password_verification']: this.fb.control('',
          [Validators.required, Validators.minLength(8)]),
        ['age']: this.fb.control('', [Validators.required]),
        ['name']: this.fb.control('', [Validators.required]),
        ['lastName']: this.fb.control('', [Validators.required]),
        ['Address']: this.fb.control('', [Validators.required]),
        ['number']: this.fb.control('', [Validators.required]),
        ['tk']: this.fb.control('', [Validators.compose(
          [Validators.required, Validators.minLength(5), Validators.maxLength(5)])]
        )
      }
    );
  }

  onSubmit() {
    const User = this.SetUpModel();
    this.auth.doRegister(this.SignUpForm.get('email').value, this.SignUpForm.get('password').value, User).then(
      res => {
        this.successMessage = 'Ο λογαριασμός δημιουργήθηκε επιτυχώς';
      },
      err => {
        this.errorMessage = 'To email που δωσατε χρησημοποιειται ίδι';
      }
    );
    this.SignUpDone = true;
  }

  private SetUpModel(): UserModel {
    const User: UserModel = {
      Address: this.SignUpForm.get('Address').value,
      Age: this.SignUpForm.get('age').value,
      email: this.SignUpForm.get('email').value,
      Name: this.SignUpForm.get('name').value,
      LastName: this.SignUpForm.get('lastName').value,
      number: this.SignUpForm.get('number').value,
      tk:  this.SignUpForm.get('tk').value
    };
    return User;

}
}

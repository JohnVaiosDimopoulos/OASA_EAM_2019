import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../User.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  UpdateForm: FormGroup;
  successMessage = null;
  errorMessage = null;
  UdpateDone = false;


  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.auth.CurrentUser);
    this.UpdateForm = this.fb.group(
      {
        ['email']: this.fb.control(this.auth.CurrentUser.email, [ Validators.email, Validators.required]),
        ['age']: this.fb.control(this.auth.CurrentUser.Age, [Validators.required]),
        ['name']: this.fb.control(this.auth.CurrentUser.Name, [Validators.required]),
        ['lastName']: this.fb.control(this.auth.CurrentUser.LastName, [Validators.required]),
        ['Address']: this.fb.control(this.auth.CurrentUser.Address, [Validators.required]),
        ['number']: this.fb.control(this.auth.CurrentUser.number, [Validators.required]),
        ['tk']: this.fb.control(this.auth.CurrentUser.tk, [Validators.compose(
          [Validators.required, Validators.minLength(5), Validators.maxLength(5)])]
        )
      });
  }

  onSubmit() {
    const User = this.SetUpModel();
    this.auth.doUpdate(User).then(
      res => {
        this.successMessage = 'Τα στοιχεια σας ενημερώθηκαν επιτυχως';
        this.UdpateDone = true;
      },
      err => {
        this.errorMessage = 'Yπηρξε σφάλμα κατα την ενημέρωση';
      }
    );
  }

  private SetUpModel(): UserModel {
    const User: UserModel = {
      Address: this.UpdateForm.get('Address').value,
      Age: this.UpdateForm.get('age').value,
      email: this.UpdateForm.get('email').value,
      Name: this.UpdateForm.get('name').value,
      LastName: this.UpdateForm.get('lastName').value,
      number: this.UpdateForm.get('number').value,
      tk:  this.UpdateForm.get('tk').value
    };
    return User;

  }

}

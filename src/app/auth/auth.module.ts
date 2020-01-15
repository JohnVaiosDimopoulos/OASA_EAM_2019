import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [ SignUpFormComponent, SignInFormComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
    exports: [
        SignInFormComponent,
        SignUpFormComponent,
        UpdateUserComponent
    ]
})
export class AuthModule { }

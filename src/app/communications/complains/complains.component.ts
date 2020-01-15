import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {

  constructor() { }
  FormSubmited = false;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.FormSubmited = true;
  }

}

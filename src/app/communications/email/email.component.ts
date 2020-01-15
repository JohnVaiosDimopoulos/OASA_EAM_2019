import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  FormedSubmited = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.FormedSubmited = true;
  }

}

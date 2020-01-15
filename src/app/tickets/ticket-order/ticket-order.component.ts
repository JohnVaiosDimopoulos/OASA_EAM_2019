import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})
export class TicketOrderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  TicketForm: FormGroup;
  TotalPrice = 0;
  FormComfirmed = false;
  FormSubmited = false;

  ngOnInit() {
    this.initForm();
    this.SetUpValidators();
  }

  initForm() {
    this.TicketForm = this.fb.group({
      ['type']: this.fb.control('', [Validators.required]),
      ['cardPrice']: this.fb.control(''),
      ['cardPin']: this.fb.control(''),
      ['tickets']: this.fb.array([]),
      ['cardNum']: this.fb.control('', [Validators.required]),
      ['holderName']: this.fb.control('', [Validators.required]),
      ['securityCode']: this.fb.control('',
         [Validators.required, Validators.min(100), Validators.max(999)]),
      ['expMonth']: this.fb.control('',
        [Validators.required, Validators.min(1), Validators.max(12)]),
      ['expYear']: this.fb.control('', [Validators.required])
    });
  }

  SetUpValidators() {
    this.TicketForm.get('type').valueChanges.subscribe(
      type => {
        if (type === 'refill') {
          console.log('in here');
          this.TicketForm.get('cardPrice').setValidators([Validators.required]);
          this.TicketForm.get('cardPin').setValidators(
            [Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
        }
        if (type === 'tickets') {
          this.TicketForm.get('tickets').setValidators([Validators.required]);
        }
      }
    );
    this.TicketForm.get('tickets').updateValueAndValidity();
    this.TicketForm.get('cardPrice').updateValueAndValidity();
    this.TicketForm.get('cardPin').updateValueAndValidity();
  }

  getTickets() {
    return (this.TicketForm.get('tickets') as FormArray).controls;
  }

  onAddTicket() {
    (this.TicketForm.get('tickets') as FormArray).push(
      new FormGroup({
        'ticketPrice': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteTicket(index) {
    (this.TicketForm.get('tickets') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.TicketForm.get('type').value === 'refill') {
      this.TotalPrice = this.TicketForm.get('cardPrice').value;
    } else if (this.TicketForm.get('type').value === 'tickets') {
      for (const ticket of (this.TicketForm.get('tickets') as FormArray).controls) {
        this.TotalPrice += (ticket.get('ticketPrice').value * ticket.get('amount').value);
      }
    }

    console.log(this.TicketForm);

    this.FormSubmited = true;
  }

  onComfirm() {
    this.FormComfirmed = true;
  }

  onBack() {
    this.FormSubmited = false;
    this.TotalPrice = 0;
  }

}

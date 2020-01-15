import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css']
})

export class CardOrderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  Step = 1;
  CardOrderFormStep1: FormGroup;
  CardOrderFormStep2: FormGroup;
  CardOrderFormStep3: FormGroup;
  CardOrderFormStep4: FormGroup;

  ngOnInit() {

    this.SetFormStep1();
    this.SetFormStep2();
    this.SetFormStep3();
    this.SetStep3Validators();
    this.SetFormStep4();
    this.SetStep4Validators();
  }

  onSubmitStep1() {
    this.Step = 2;
  }

  SetFormStep1() {
    this.CardOrderFormStep1 = this.fb.group({
        ['name']: this.fb.control('', [Validators.required]),
        ['lastName']: this.fb.control('', [Validators.required]),
        ['validationType']: this.fb.control('', [Validators.required]),
        ['validationCode']: this.fb.control('', [Validators.required]),
        ['email']: this.fb.control('', [Validators.required, Validators.email]),
        ['birthDate']: this.fb.control('', [Validators.required]),
        ['pin']: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
      }
    );
  }

  onSubmitStep2() {
    this.Step = 3;
  }

  SetFormStep2() {
    this.CardOrderFormStep2 = this.fb.group({
      ['type']: this.fb.control('', [Validators.required]),
      ['qualification']: this.fb.control('', [Validators.required])
    });
  }

  onSkipStep2() {
    this.Step = 3;
    this.CardOrderFormStep2.get('type').setValue('');
    this.CardOrderFormStep2.get('qualification').setValue('');
  }

  onSubmitStep3() {
    this.Step = 4;
  }

  onSubmitStep4() {
    this.Step = 5;
    this.logForm();
  }

  SetFormStep3() {
    this.CardOrderFormStep3 = this.fb.group({
      ['type'] : this.fb.control('', [Validators.required]),
      ['address']: this.fb.control(''),
      ['number']: this.fb.control(''),
      ['tk']: this.fb.control(''),
      ['spot']: this.fb.control('')
    });
  }

  SetStep3Validators() {

    this.CardOrderFormStep3.get('type').valueChanges.subscribe(
      type => {
        if (type === 'Delivery') {
          this.CardOrderFormStep3.get('tk').setValidators([Validators.required,
            Validators.min(10000), Validators.max(99999)]);
          this.CardOrderFormStep3.get('address').setValidators([Validators.required]);
          this.CardOrderFormStep3.get('number').setValidators([Validators.required]);
        }

        if (type === 'Takeout') {
          this.CardOrderFormStep3.get('spot').setValidators([Validators.required]);
        }
        this.CardOrderFormStep3.get('spot').updateValueAndValidity();
        this.CardOrderFormStep3.get('tk').updateValueAndValidity();
        this.CardOrderFormStep3.get('address').updateValueAndValidity();
        this.CardOrderFormStep3.get('number').updateValueAndValidity();
      }
    );
  }

  SetFormStep4() {
    this.CardOrderFormStep4 = this.fb.group({
      ['ticketType']: this.fb.control('', [Validators.required]),
      ['paymentType']: this.fb.control('', [Validators.required]),
      ['cardNum']: this.fb.control(''),
      ['holderName']: this.fb.control(''),
      ['securityCode']: this.fb.control(''),
      ['expMonth']: this.fb.control(''),
      ['expYear']: this.fb.control('')
    });
  }

  SetStep4Validators() {

    this.CardOrderFormStep4.get('paymentType').valueChanges.subscribe(
      type => {
        if (type === 'Card') {
          this.CardOrderFormStep4.get('cardNum').setValidators([Validators.required]);
          this.CardOrderFormStep4.get('holderName').setValidators([Validators.required]);
          this.CardOrderFormStep4.get('securityCode').setValidators(
            [Validators.required, Validators.min(100), Validators.max(999)]);
          this.CardOrderFormStep4.get('expMonth').setValidators(
            [Validators.required, Validators.min(0), Validators.max(12)]);
          this.CardOrderFormStep4.get('expYear').setValidators([Validators.required]);
        }

        this.CardOrderFormStep4.get('cardNum').updateValueAndValidity();
        this.CardOrderFormStep4.get('holderName').updateValueAndValidity();
        this.CardOrderFormStep4.get('securityCode').updateValueAndValidity();
        this.CardOrderFormStep4.get('expMonth').updateValueAndValidity();
        this.CardOrderFormStep4.get('expYear').updateValueAndValidity();
      }
    );
  }

  onSkipStep4() {
    this.Step = 5;
    this.CardOrderFormStep4.get('ticketType').setValue('');
    this.CardOrderFormStep4.get('paymentType').setValue('');
    this.CardOrderFormStep4.get('cardNum').setValue('');
    this.CardOrderFormStep4.get('holderName').setValue('');
    this.CardOrderFormStep4.get('securityCode').setValue('');
    this.CardOrderFormStep4.get('expMonth').setValue('');
    this.CardOrderFormStep4.get('expYear').setValue('');
    this.logForm();
  }

  logForm() {
    console.log(this.CardOrderFormStep1.controls);
    console.log(this.CardOrderFormStep2.controls);
    console.log(this.CardOrderFormStep3.controls);
    console.log(this.CardOrderFormStep4.controls);
  }

}

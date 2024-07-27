import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})

export class PaymentsComponent {
  paymentNameInput = '';
  paymentAmountInput = 0;

  payments = [
    {
      name: 'Tolga',
      amount: 100,
      code: '12',
      grid: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
      ]
    },
    {
      name: 'Yavuz',
      amount: 200,
      code: '34',
      grid: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
      ]
    }
  ];

  constructor() { }

  addPayment() {
    this.paymentNameInput = '';
    this.paymentAmountInput = 0;
  }
  
}

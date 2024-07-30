import { Component, Input } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { Service } from '../../services/service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})

export class PaymentsComponent {
  @Input() payments: Payment[] = [];
  @Input() code = '';
  @Input() grid: string[][] = [];
  
  paymentNameInput = '';
  paymentAmountInput = 0;
  
  constructor(private service: Service) { }

  public addPayment() {
    const newPayment = new Payment(this.paymentNameInput, this.paymentAmountInput, this.code, this.grid);
    this.service.addPayment(newPayment).subscribe();
    this.paymentNameInput = '';
    this.paymentAmountInput = 0;
  }
}

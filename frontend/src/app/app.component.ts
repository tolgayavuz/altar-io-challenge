import { Component } from '@angular/core';
import { interval, Subscription, switchMap } from 'rxjs';
import { Service } from './services/service';
import { Payment } from './models/payment.model';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grid Generator App';
  grid: string[][] = [];
  payments: Payment[] = [];
  code: string = '';
  live: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.initializeGrid();
    this.subscribeToWebSocket();
  }

  initializeGrid() {
    this.grid = Array(10).fill(null).map(() => Array(10).fill('*'));
  }

  private subscribeToWebSocket() {
    this.subscription.add(this.webSocketService.getMessages().subscribe((data: any) => {
      if (data) {
        this.grid = data.grid;
        this.code = data.code;
        this.payments = data.payments.map((payment: any) => new Payment(payment.name, payment.amount, payment.code, payment.grid))
        this.live = true;
      }
    }, (error) => {
      console.error('Error:' + error.message);
      this.live = false;
    }));
  }

  startGenerator() {
    console.log('Starting generator');
    this.webSocketService.sendMessage('startGenerator');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import * as apiConfig from '../../assets/apiConfig.json';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http: HttpClient) { }

  getGrid(): Observable<string[][]> {
    return this.http.get<string[][]>(apiConfig.generateGrid.url);
  }

  getCode(): Observable<string> {
    return this.http.get<string>(apiConfig.getCode.url);
  }

  setBias(bias: string): Observable<any> {
    return this.http.post(apiConfig.setBias.url, { bias });
  }

  getDataInSync(): Observable<{ grid: string[][]; code: string, payments: Payment[] }> {
    return forkJoin([
      this.getGrid(),
      this.getCode(),
      this.getPayments()
    ]).pipe(
      map(([grid, code, payments]) => ({ grid, code, payments }))
    );
  }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(apiConfig.getPayments.url).pipe(
      map(
        (payments) =>
          payments.map((payment) => new Payment(payment.name, payment.amount, payment.code, payment.grid))
      )
    );
  }

  addPayment(payment: Payment) {
    return this.http.post(apiConfig.addPayment.url, { data: JSON.stringify(payment) });
  }
}

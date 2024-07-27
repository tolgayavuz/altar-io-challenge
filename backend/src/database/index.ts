import { Payment } from "./model/Payment";

export default class Database {
    public payments = new Array<Payment>();
    constructor() {
        console.log('Database initialized');
    }

    public getPayments() {
        return this.payments;
    }

    public addPayment(payment: Payment) {
        this.payments.push(payment);
    }
}
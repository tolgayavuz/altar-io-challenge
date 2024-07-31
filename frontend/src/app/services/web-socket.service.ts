// src/app/websocket.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    private socket: WebSocket;
    private messagesSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor() {
        this.socket = new WebSocket('ws://localhost:3000');
        this.socket.onmessage = (event) => {
            this.messagesSubject.next(JSON.parse(event.data));
        };
    }

    public sendMessage(message: string): void {
        this.socket.send(message);
    }

    public getMessages(): Observable<string> {
        return this.messagesSubject.asObservable();
    }
}

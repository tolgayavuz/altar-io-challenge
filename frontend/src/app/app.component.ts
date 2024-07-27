import { Component } from '@angular/core';
import { interval, Subscription, switchMap } from 'rxjs';
import { Service } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grid Generator App';
  grid: string[][] = [];
  code: string = '';
  live: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private service: Service) { }

  ngOnInit() {
    this.initializeGrid();
  }

  initializeGrid() {
    this.grid = Array(10).fill(null).map(() => Array(10).fill('*'));
  }

  startGenerator() {
    console.log('Starting generator');
    this.subscription = interval(2000)
      .pipe(switchMap(() => this.service.getGridAndCode()))
      .subscribe(({ grid, code }) => {
        this.grid = grid;
        this.code = code;
        this.live = true;
      },
        (error) => {
          console.error('Error:' + error);
          this.live = false;
          this.subscription.unsubscribe();
        });
  }
}

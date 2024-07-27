import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription, switchMap } from 'rxjs';
import * as apiConfig from '../../assets/apiConfig.json';
import { Service } from '../services/service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() grid: string[][] = [];
}

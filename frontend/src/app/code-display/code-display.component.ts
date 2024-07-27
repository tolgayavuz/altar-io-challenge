import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.scss']
})
export class CodeDisplayComponent implements OnInit {
  @Input() code: string = '';
  private codeSubscription!: Subscription;

  constructor() { }

  ngOnInit() { }
}

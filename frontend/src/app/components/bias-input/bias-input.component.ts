import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as apiConfig from '../../../assets/apiConfig.json';

@Component({
  selector: 'app-bias-input',
  templateUrl: './bias-input.component.html',
  styleUrls: ['./bias-input.component.scss']
})
export class BiasInputComponent {
  biasCharacter: string = '';

  constructor(private http: HttpClient) {}

  updateBias() {
    if (this.biasCharacter.match(/[a-z]/)) {
      this.http.post(apiConfig.setBias.url, { bias: this.biasCharacter.toLowerCase() }).subscribe();
    }
  }
}

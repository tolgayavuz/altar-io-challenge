import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as apiConfig from '../../../assets/apiConfig.json';
import { interval } from 'rxjs';
import { Service } from '../../services/service';

@Component({
  selector: 'app-bias-input',
  templateUrl: './bias-input.component.html',
  styleUrls: ['./bias-input.component.scss']
})
export class BiasInputComponent {
  biasCharacter: string = '';
  disableInput: boolean = false;

  constructor(private service: Service) {}

  updateBias() {
    if (this.biasCharacter.match(/[a-z]/)) {
      //this.http.post(apiConfig.setBias.url, { bias: this.biasCharacter.toLowerCase() }).subscribe();
      this.service.setBias(this.biasCharacter.toLowerCase()).subscribe();
      this.disableInput = true;
      interval(4000).subscribe(() => {
        this.disableInput = false;
      })
    }
  }
}

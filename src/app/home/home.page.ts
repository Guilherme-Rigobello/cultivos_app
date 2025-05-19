import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(public router: Router) {}
  temp1 = 20;
  temp2 = 20;
  temp3 = 20;
  temp4 = 20;
  media = 0

  verificarCulturas() {
     this.media = (this.temp1 + this.temp2 + this.temp3 + this.temp4) / 4;

    this.router.navigateByUrl (`/tela-culturas/${this.media}`)
  }

  
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCulturasPageRoutingModule } from './tela-culturas-routing.module';

import { TelaCulturasPage } from './tela-culturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCulturasPageRoutingModule
  ],
  declarations: [TelaCulturasPage]
})
export class TelaCulturasPageModule {}

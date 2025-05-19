import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCulturasPage } from './tela-culturas.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCulturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCulturasPageRoutingModule {}

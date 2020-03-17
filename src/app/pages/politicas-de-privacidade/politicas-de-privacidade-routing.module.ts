import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticasDePrivacidadePage } from './politicas-de-privacidade.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticasDePrivacidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticasDePrivacidadePageRoutingModule {}

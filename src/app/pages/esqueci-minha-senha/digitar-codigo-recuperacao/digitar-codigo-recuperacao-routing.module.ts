import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitarCodigoRecuperacaoPage } from './digitar-codigo-recuperacao.page';

const routes: Routes = [
  {
    path: '',
    component: DigitarCodigoRecuperacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitarCodigoRecuperacaoPageRoutingModule {}

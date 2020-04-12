import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionamentoPage } from './funcionamento.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionamentoPageRoutingModule {}

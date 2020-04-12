import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimentacoesClientePage } from './movimentacoes-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: MovimentacoesClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimentacoesClientePageRoutingModule {}

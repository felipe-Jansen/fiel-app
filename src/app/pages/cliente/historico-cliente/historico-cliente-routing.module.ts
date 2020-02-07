import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoClientePage } from './historico-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoClientePageRoutingModule {}

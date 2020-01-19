import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheClientePage } from './detalhe-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheClientePageRoutingModule {}

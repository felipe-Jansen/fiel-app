import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoUpdatePage } from './ponto-update.page';

const routes: Routes = [
  {
    path: '',
    component: PontoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecompensaUpdatePageRoutingModule {}

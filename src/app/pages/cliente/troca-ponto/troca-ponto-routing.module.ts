import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocaPontoPage } from './troca-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: TrocaPontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrocaPontoPageRoutingModule {}

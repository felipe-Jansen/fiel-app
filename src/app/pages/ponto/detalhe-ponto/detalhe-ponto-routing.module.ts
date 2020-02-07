import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePontoPage } from './detalhe-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePontoPageRoutingModule {}

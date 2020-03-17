import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuporteTecnicoPage } from './suporte-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: SuporteTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuporteTecnicoPageRoutingModule {}

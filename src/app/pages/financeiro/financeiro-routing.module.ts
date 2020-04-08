import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceiroPage } from './financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceiroPage
  },
  {
    path: 'form-financeiro',
    loadChildren: () => import('./form-financeiro/form-financeiro.module').then( m => m.FormFinanceiroPageModule)
  },
  {
    path: 'form-financeiro/:id',
    loadChildren: () => import('./form-financeiro/form-financeiro.module').then( m => m.FormFinanceiroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceiroPageRoutingModule {}

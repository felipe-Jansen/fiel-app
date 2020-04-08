import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFinanceiroPage } from './form-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: FormFinanceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFinanceiroPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecompensaUpdatePage } from './recompensa-update.page';

const routes: Routes = [
  {
    path: '',
    component: RecompensaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecompensaUpdatePageRoutingModule {}

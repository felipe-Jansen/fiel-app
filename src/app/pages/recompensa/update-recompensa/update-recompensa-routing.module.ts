import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRecompensaPage } from './update-recompensa.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRecompensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRecompensaPageRoutingModule {}

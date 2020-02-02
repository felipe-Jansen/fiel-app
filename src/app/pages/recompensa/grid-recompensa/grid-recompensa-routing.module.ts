import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridRecompensaPage } from './grid-recompensa.page';

const routes: Routes = [
  {
    path: '',
    component: GridRecompensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridRecompensaPageRoutingModule {}

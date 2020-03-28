import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroducedSlidesPage } from './introduced-slides.page';

const routes: Routes = [
  {
    path: '',
    component: IntroducedSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroducedSlidesPageRoutingModule {}

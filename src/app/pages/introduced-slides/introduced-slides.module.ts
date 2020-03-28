import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroducedSlidesPageRoutingModule } from './introduced-slides-routing.module';

import { IntroducedSlidesPage } from './introduced-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroducedSlidesPageRoutingModule
  ],
  declarations: [IntroducedSlidesPage]
})
export class IntroducedSlidesPageModule {}

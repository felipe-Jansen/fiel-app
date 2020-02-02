import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridRecompensaPageRoutingModule } from './grid-recompensa-routing.module';

import { GridRecompensaPage } from './grid-recompensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridRecompensaPageRoutingModule
  ],
  declarations: [GridRecompensaPage]
})
export class GridRecompensaPageModule {}

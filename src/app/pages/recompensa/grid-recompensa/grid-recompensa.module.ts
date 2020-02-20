import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridRecompensaPageRoutingModule } from './grid-recompensa-routing.module';

import { GridRecompensaPage } from './grid-recompensa.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GridRecompensaPageRoutingModule,
        SharedModule
    ],
  declarations: [GridRecompensaPage]
})
export class GridRecompensaPageModule {}

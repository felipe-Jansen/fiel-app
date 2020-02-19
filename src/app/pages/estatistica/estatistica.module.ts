import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatisticaPageRoutingModule } from './estatistica-routing.module';

import { EstatisticaPage } from './estatistica.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EstatisticaPageRoutingModule,
        SharedModule
    ],
  declarations: [EstatisticaPage]
})
export class EstatisticaPageModule {}

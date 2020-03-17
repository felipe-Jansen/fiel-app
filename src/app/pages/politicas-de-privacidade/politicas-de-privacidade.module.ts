import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticasDePrivacidadePageRoutingModule } from './politicas-de-privacidade-routing.module';

import { PoliticasDePrivacidadePage } from './politicas-de-privacidade.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PoliticasDePrivacidadePageRoutingModule,
        SharedModule
    ],
  declarations: [PoliticasDePrivacidadePage]
})
export class PoliticasDePrivacidadePageModule {}

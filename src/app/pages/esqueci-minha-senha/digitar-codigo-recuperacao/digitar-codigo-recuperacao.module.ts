import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitarCodigoRecuperacaoPageRoutingModule } from './digitar-codigo-recuperacao-routing.module';

import { DigitarCodigoRecuperacaoPage } from './digitar-codigo-recuperacao.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DigitarCodigoRecuperacaoPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  declarations: [DigitarCodigoRecuperacaoPage]
})
export class DigitarCodigoRecuperacaoPageModule {}

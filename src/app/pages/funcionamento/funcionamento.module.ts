import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionamentoPageRoutingModule } from './funcionamento-routing.module';

import { FuncionamentoPage } from './funcionamento.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FuncionamentoPageRoutingModule,
        SharedModule
    ],
  declarations: [FuncionamentoPage]
})
export class FuncionamentoPageModule {}

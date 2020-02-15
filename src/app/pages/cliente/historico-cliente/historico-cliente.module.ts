import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoClientePageRoutingModule } from './historico-cliente-routing.module';

import { HistoricoClientePage } from './historico-cliente.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HistoricoClientePageRoutingModule,
        SharedModule
    ],
  declarations: [HistoricoClientePage]
})
export class HistoricoClientePageModule {}

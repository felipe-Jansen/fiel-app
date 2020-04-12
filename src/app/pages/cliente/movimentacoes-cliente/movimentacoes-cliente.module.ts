import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimentacoesClientePageRoutingModule } from './movimentacoes-cliente-routing.module';

import { MovimentacoesClientePage } from './movimentacoes-cliente.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MovimentacoesClientePageRoutingModule,
        SharedModule
    ],
  declarations: [MovimentacoesClientePage]
})
export class MovimentacoesClientePageModule {}

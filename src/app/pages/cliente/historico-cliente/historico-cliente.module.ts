import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoClientePageRoutingModule } from './historico-cliente-routing.module';

import { HistoricoClientePage } from './historico-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoClientePageRoutingModule
  ],
  declarations: [HistoricoClientePage]
})
export class HistoricoClientePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrocaPontoPageRoutingModule } from './troca-ponto-routing.module';

import { TrocaPontoPage } from './troca-ponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrocaPontoPageRoutingModule
  ],
  declarations: [TrocaPontoPage]
})
export class TrocaPontoPageModule {}

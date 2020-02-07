import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePontoPageRoutingModule } from './detalhe-ponto-routing.module';

import { DetalhePontoPage } from './detalhe-ponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePontoPageRoutingModule
  ],
  declarations: [DetalhePontoPage]
})
export class DetalhePontoPageModule {}

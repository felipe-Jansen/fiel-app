import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciMinhaSenhaPageRoutingModule } from './esqueci-minha-senha-routing.module';

import { EsqueciMinhaSenhaPage } from './esqueci-minha-senha.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciMinhaSenhaPageRoutingModule,
    SharedModule
  ],
  declarations: [EsqueciMinhaSenhaPage]
})
export class EsqueciMinhaSenhaPageModule {}

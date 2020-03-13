import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarSenhaPageRoutingModule } from './alterar-senha-routing.module';

import { AlterarSenhaPage } from './alterar-senha.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlterarSenhaPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  declarations: [AlterarSenhaPage]
})
export class AlterarSenhaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuporteTecnicoPageRoutingModule } from './suporte-tecnico-routing.module';

import { SuporteTecnicoPage } from './suporte-tecnico.page';
import {SharedModule} from "../../shared/shared.module";
import {BrMaskerModule} from "br-mask";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SuporteTecnicoPageRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        BrMaskerModule
    ],
  declarations: [SuporteTecnicoPage]
})
export class SuporteTecnicoPageModule {}

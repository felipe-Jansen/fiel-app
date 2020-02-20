import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateClientePageRoutingModule } from './update-cliente-routing.module';

import { UpdateClientePage } from './update-cliente.page';
import { SharedModule } from '../../../shared/shared.module';
import {BrMaskerModule} from "br-mask";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        UpdateClientePageRoutingModule,
        SharedModule,
        BrMaskerModule
    ],
  declarations: [UpdateClientePage]
})
export class UpdateClientePageModule {}

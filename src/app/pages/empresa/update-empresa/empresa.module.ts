import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaPageRoutingModule } from './empresa-routing.module';

import { EmpresaPage } from './empresa.page';
import {SharedModule} from "../../../shared/shared.module";
import {BrMaskerModule} from "br-mask";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EmpresaPageRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        BrMaskerModule
    ],
  declarations: [EmpresaPage]
})
export class EmpresaPageModule {}

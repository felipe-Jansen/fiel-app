import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRecompensaPageRoutingModule } from './update-recompensa-routing.module';

import { UpdateRecompensaPage } from './update-recompensa.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateRecompensaPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  declarations: [UpdateRecompensaPage]
})
export class UpdateRecompensaPageModule {}

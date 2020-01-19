import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheClientePageRoutingModule } from './detalhe-cliente-routing.module';

import { DetalheClientePage } from './detalhe-cliente.page';
import {RecompensaUpdatePage} from "../../recompensa/recompensa-update/recompensa-update.page";
import {RecompensaUpdatePageModule} from "../../recompensa/recompensa-update/recompensa-update.module";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetalheClientePageRoutingModule,
        RecompensaUpdatePageModule,
        SharedModule

    ],
  declarations: [DetalheClientePage],
  entryComponents: [
      RecompensaUpdatePage
  ]

})
export class DetalheClientePageModule {}

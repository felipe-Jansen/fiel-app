import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {BrMaskerModule} from "br-mask";
import {MeuPerfilPageRoutingModule} from "./meu-perfil-routing.module";
import {MeuPerfilPage} from "./meu-perfil.page";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MeuPerfilPageRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        BrMaskerModule
    ],
  declarations: [MeuPerfilPage]
})
export class MeuPerfilPageModule {}

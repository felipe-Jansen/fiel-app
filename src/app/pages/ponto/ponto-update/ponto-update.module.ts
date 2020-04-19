import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecompensaUpdatePageRoutingModule} from './ponto-update-routing.module';

import {PontoUpdatePage} from './ponto-update.page';
import {SharedModule} from "../../../shared/shared.module";
import {CurrencyMaskModule} from 'ngx-currency-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecompensaUpdatePageRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        CurrencyMaskModule
    ],
    exports: [
        PontoUpdatePage
    ],
    declarations: [PontoUpdatePage]
})
export class RecompensaUpdatePageModule {}

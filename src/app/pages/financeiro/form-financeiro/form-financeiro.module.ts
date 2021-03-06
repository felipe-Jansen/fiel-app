import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FormFinanceiroPageRoutingModule} from './form-financeiro-routing.module';

import {FormFinanceiroPage} from './form-financeiro.page';
import {SharedModule} from '../../../shared/shared.module';
import { CurrencyMaskModule } from "ngx-currency-mask";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormFinanceiroPageRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        CurrencyMaskModule
    ],
  declarations: [FormFinanceiroPage]
})
export class FormFinanceiroPageModule {}

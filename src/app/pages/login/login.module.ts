import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {IntroductionSlideComponent} from "./introduction-slide/introduction-slide.component";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [LoginPage,
    IntroductionSlideComponent]
})
export class LoginPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "./layouts/banner/banner.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    BannerComponent
  ],
  exports: [
    BannerComponent
  ],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ]
})
export class SharedModule { }

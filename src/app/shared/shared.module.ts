import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {BannerRadiusTotalComponent} from "./layouts/banner-radius-total/banner-radius-total.component";

@NgModule({
  declarations: [
    BannerRadiusTotalComponent
  ],
  exports: [
    BannerRadiusTotalComponent
  ],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ]
})
export class SharedModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {BannerRadiusTotalComponent} from "./layouts/banner-radius-total/banner-radius-total.component";
import {NgModel} from "@angular/forms";

@NgModule({
  declarations: [
    BannerRadiusTotalComponent
  ],
  exports: [
    BannerRadiusTotalComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule],
  providers: [
      NgModel
  ]
})
export class SharedModule { }

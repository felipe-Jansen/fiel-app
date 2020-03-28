import { Component, OnInit } from '@angular/core';
import {Events} from "@ionic/angular";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-introduced-slides',
  templateUrl: './introduced-slides.page.html',
  styleUrls: ['./introduced-slides.page.scss'],
})
export class IntroducedSlidesPage implements OnInit {

  constructor(
      public events: Events,
      public router: Router,
      private storage: Storage
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.storage.set('app-was-introduced', true);
    this.router.navigateByUrl('login');
  }

}

import { Component, OnInit } from '@angular/core';
import {Events} from "@ionic/angular";

@Component({
  selector: 'app-introduction-slide',
  templateUrl: './introduction-slide.component.html',
  styleUrls: ['./introduction-slide.component.scss'],
})
export class IntroductionSlideComponent implements OnInit {

  constructor(
      public events: Events
  ) { }

  ngOnInit() {}



}

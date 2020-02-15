import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-radius-total',
  templateUrl: './banner-radius-total.component.html',
  styleUrls: ['./banner-radius-total.component.scss'],
})
export class BannerRadiusTotalComponent implements OnInit {

  @Input() texto: string;

  constructor() { }

  ngOnInit() {}

}

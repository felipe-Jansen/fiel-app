import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PontoService} from "../../../services/ponto.service";
import {IPonto} from "../../../shared/model/ponto.model";

@Component({
  selector: 'app-detalhe-ponto',
  templateUrl: './detalhe-ponto.page.html',
  styleUrls: ['./detalhe-ponto.page.scss'],
})
export class DetalhePontoPage implements OnInit {

  idPonto = this.route.snapshot.params['idPonto'];
  ponto: IPonto;

  constructor(
      private route: ActivatedRoute,
      private pontoService: PontoService
  ) {}

  ionViewWillEnter() {
    this.pontoService.find(this.idPonto)
        .subscribe(res => {
          this.ponto = res;
        });
  }

  ngOnInit() {
  }

}

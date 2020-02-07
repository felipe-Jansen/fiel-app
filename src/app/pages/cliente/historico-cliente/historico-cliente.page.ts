import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PontoService} from "../../../services/ponto.service";
import {IPonto} from "../../../shared/model/ponto.model";

@Component({
  selector: 'app-historico-cliente',
  templateUrl: './historico-cliente.page.html',
  styleUrls: ['./historico-cliente.page.scss'],
})
export class HistoricoClientePage implements OnInit {

  idCliente = this.route.snapshot.params['idCliente'];
  pontos: IPonto[] = [];

  constructor(
      private route: ActivatedRoute,
      private pontoService: PontoService
  ) { }

  ionViewWillEnter() {
    this.pontoService.getAll({'idCliente': this.idCliente})
        .subscribe(res => {
          this.pontos = res;
        })
  }

  ngOnInit() {
  }

}

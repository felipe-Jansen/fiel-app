import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {RecompensaUpdatePage} from "../../ponto/recompensa-update/recompensa-update.page";
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../shared/model/cliente.model";
import {PontoService} from "../../../services/ponto.service";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.page.html',
  styleUrls: ['./detalhe-cliente.page.scss'],
})
export class DetalheClientePage {

  idCliente = this.route.snapshot.params['idCliente'];
  totalPontos: number = 0;
  cliente: Cliente;

  constructor(
      private route: ActivatedRoute,
      private modalController: ModalController,
      private clienteService: ClienteService,
      private pontoService: PontoService
  ) { }

  ionViewWillEnter() {
    this.getCliente();
  }

  getCliente() {
    this.clienteService.find(this.idCliente)
        .subscribe(res => {
          this.cliente = res;
          this.getTotalPontos(res.codigo);
        });
  }

  getTotalPontos(idCliente: number) {
    this.pontoService.getPontos(idCliente)
        .subscribe(res => {
          this.totalPontos = res;
        })
  }

  async openModalPonto() {
    const modal = await this.modalController.create({
      component: RecompensaUpdatePage,
      componentProps: {
        'idCliente': this.idCliente
      }
    });
    return await modal.present();
  }

    alterarDados() {

    }
}

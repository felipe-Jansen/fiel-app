import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {RecompensaUpdatePage} from "../../recompensa/recompensa-update/recompensa-update.page";
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../shared/model/cliente.model";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.page.html',
  styleUrls: ['./detalhe-cliente.page.scss'],
})
export class DetalheClientePage {

  idCliente = this.route.snapshot.params['idCliente'];

  cliente: Cliente;

  constructor(
      private route: ActivatedRoute,
      private modalController: ModalController,
      private clienteService: ClienteService
  ) { }

  ionViewWillEnter() {
    this.clienteService.find(this.idCliente)
        .subscribe(res => {
          console.log(res);
          this.cliente = res;
        });
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

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {PontoUpdatePage} from "../../ponto/ponto-update/ponto-update.page";
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../shared/model/cliente.model";
import {PontoService} from "../../../services/ponto.service";
import {ClienteRecompensaService} from "../../../services/clienteRecompensa.service";
import {RecompensaCliente} from "../../../shared/model/recompensa_cliente.model";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.page.html',
  styleUrls: ['./detalhe-cliente.page.scss'],
})
export class DetalheClientePage {

  idCliente = this.route.snapshot.params['idCliente'];
  totalPontos: number = 0;
  cliente: Cliente;
  recompensasCliente: RecompensaCliente[] = [];

  constructor(
      private route: ActivatedRoute,
      private modalController: ModalController,
      private clienteService: ClienteService,
      private pontoService: PontoService,
      private router: Router,
      private recompensaClienteService: ClienteRecompensaService,
      private alertController: AlertController,
      public loadingController: LoadingController
  ) { }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos pesquisandos os dados do cliente !'
    });
    await loading.present();
    this.getCliente();
  }

  getCliente() {
    this.clienteService.find(this.idCliente)
        .subscribe(res => {
          this.cliente = res;
          this.getTotalPontos(res.codigo);
          this.getRecompensasDisponiveis(res.codigo);
          this.loadingController.dismiss();
        });
  }

  getRecompensasDisponiveis(idCliente: number) {
    this.recompensaClienteService.getAll(
        {
          'idCliente': idCliente,
          'quantidade': 1
        })
        .subscribe(res => {
          this.recompensasCliente = res;
        })
  }

  getTotalPontos(idCliente: number) {
    this.pontoService.getPontos(idCliente)
        .subscribe(res => {
          this.totalPontos = res;
        })
  }

  async openModalPonto() {
    const modal = await this.modalController.create({
      component: PontoUpdatePage,
      componentProps: {
        'idCliente': this.idCliente
      }
    });
    modal.onDidDismiss().then(data => {
      this.getCliente();
    });
    return await modal.present();
  }

  trocarPontos() {}

  goto(link: string) {
    this.router.navigate([link]);
  }

  async alertTroca(recompensaCliente: RecompensaCliente) {
    let opcoes: any[] = [];
    for(let i=1; i<=recompensaCliente.quantidade; i++) {
      opcoes.push({name: i, type: 'radio', label: i + ' Unidade(s)',value: i});
    }
    console.log(opcoes);
    const alert = await this.alertController.create({
      header: 'Selecione a quantidade que será utilizada',
      inputs: opcoes,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: data => {
            recompensaCliente.quantidade -= data;
            this.recompensaClienteService.update(recompensaCliente)
                .subscribe(res => {
                  this.getRecompensasDisponiveis(this.idCliente);
                  this.mostraModalUsoRecompensa(res);
                });
          }
        }
      ]
    });
    await alert.present();
  }

  async mostraModalUsoRecompensa(res: RecompensaCliente) {
    const alert = await this.alertController.create({
      header: 'Parabéns !!!',
      subHeader: 'Recompensa utilizada',
      buttons: [
        {
          text: 'Fechar'
        }
      ]
    });
    await alert.present();
  }
}

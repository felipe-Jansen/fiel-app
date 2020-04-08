import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {PontoUpdatePage} from "../../ponto/ponto-update/ponto-update.page";
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../shared/model/cliente.model";
import {PontoService} from "../../../services/ponto.service";
import {RecompensaCliente} from "../../../shared/model/recompensa_cliente.model";
import {RecompensaService} from "../../../services/recompensa.service";
import {MovimentacaoEstoqueClienteService} from "../../../services/movimentacao-estoque-cliente.service";
import {MovimentacaoEstoqueCliente} from "../../../shared/model/MovimentacaoEstoque.model";

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
      private alertController: AlertController,
      public loadingController: LoadingController,
      public recompensaService: RecompensaService,
      public movimentacaoEstoqueClienteService: MovimentacaoEstoqueClienteService
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
    this.recompensaService.getAllByCliente(idCliente).subscribe(res => {
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
    for(let i=1; i<=recompensaCliente.totalEstoqueCliente; i++) {
      opcoes.push({name: i, type: 'radio', label: i + ' Unidade(s)',value: i});
    }
    const alert = await this.alertController.create({
      header: 'Selecione a quantidade que será utilizada',
      inputs: opcoes,
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
              alert.dismiss();
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            const movimentacaoEstoque = new MovimentacaoEstoqueCliente();
            movimentacaoEstoque.idCliente = this.idCliente;
            movimentacaoEstoque.quantidade = data;
            movimentacaoEstoque.tipoMovimentacao = 'SAIDA';
            movimentacaoEstoque.idRecompensa = recompensaCliente.codigo;
            this.movimentacaoEstoqueClienteService.create(movimentacaoEstoque).subscribe(res => {
              this.getRecompensasDisponiveis(this.idCliente);
              this.mostraModalUsoRecompensa();
              alert.dismiss();
            })
          }
        }
      ]
    });
    await alert.present();
  }

  async mostraModalUsoRecompensa() {
    const alert = await this.alertController.create({
      header: 'Parabéns !!!',
      subHeader: 'Recompensa(s) utilizada(s)',
      buttons: [
        {
          text: 'Fechar'
        }
      ]
    });
    await alert.present();
  }
}

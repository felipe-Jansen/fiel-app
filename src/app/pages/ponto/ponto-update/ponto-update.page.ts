import { RecompensaService } from '../../../services/recompensa.service';
import { PontoService } from '../../../services/ponto.service';
import { IPonto, Ponto } from '../../../shared/model/ponto.model';
import {Component, Input, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {FormBuilder} from "@angular/forms";
import {Cliente} from "../../../shared/model/cliente.model";
import {ClienteService} from "../../../services/cliente.service";
import { Recompensa } from 'src/app/shared/model/recompensa.model';
import {EmpresaService} from "../../../services/empresa.service";
import {Empresa} from "../../../shared/model/empresa.model";
import moment from "moment";

@Component({
  selector: 'app-recompensa-update',
  templateUrl: './ponto-update.page.html',
  styleUrls: ['./ponto-update.page.scss'],
})
export class PontoUpdatePage {

  @Input() idCliente: number;

  clientes: Cliente[] = [];
  recompensas: Recompensa[] = [];
  empresa: Empresa;
  momento = Date.now();

  editForm = this.fb.group({
    codigo: [],
    pontoAtivo: [],
    valorCompra: [0],
    dataCompra: [],
    idCliente: [],
    idEmpresa: [],
    idRecompensa: [],
    descricao: []
  });

  constructor(
      public modalController: ModalController,
      private fb: FormBuilder,
      private clienteService: ClienteService,
      private pontoService: PontoService,
      private recompensaService: RecompensaService,
      private empresaService: EmpresaService,
      public alertController: AlertController,
      public loadingController: LoadingController
  ) { }

  ionViewWillEnter(){
    this.getEmpresaLogada();
    this.getClientes();
  }

  getClientes() {
    this.clienteService.findAll()
    .subscribe( (res) => {
      this.clientes = res;
    });
  }

  getEmpresaLogada() {
    this.empresaService.getEmpresaLogada()
        .then( empresa => {
          this.empresa = empresa;
        });
  }

  close() {
    this.modalController.dismiss();
  }

  private createFromForm(): IPonto {
    const ponto = {
      ...new Ponto() ,
      codigo: this.editForm.get(['codigo']).value,
      pontoAtivo: this.editForm.get(['pontoAtivo']).value,
      valorCompra: this.editForm.get(['valorCompra']).value,
      dataCompra: this.editForm.get(['dataCompra']).value,
      idCliente: this.idCliente,
      idEmpresa: this.empresa.codigo,
      idRecompensa: this.editForm.get(['idRecompensa']).value,
      descricao: this.editForm.get(['descricao']).value
    };
    return ponto;
  }

  async mostraModalCriacaoPonto(res: Ponto) {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Venda cadastrada com sucesso e '+ res.totalPontos +' pontos obtidos :) !',
      buttons: [
        {
          text: 'Fechar'
        }
      ]
    });
    await alert.present();
  }

  async create() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos registando o ponto! :)'
    });
    await loading.present();
    const ponto = this.createFromForm();
    this.pontoService.create(ponto)
      .subscribe( (res) => {
        this.close();
        this.loadingController.dismiss();
        this.mostraModalCriacaoPonto(res);
      });
  }

}

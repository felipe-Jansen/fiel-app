import { RecompensaService } from '../../../services/recompensa.service';
import { PontoService } from '../../../services/ponto.service';
import { IPonto, Ponto } from '../../../shared/model/ponto.model';
import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder} from "@angular/forms";
import {Cliente} from "../../../shared/model/cliente.model";
import {ClienteService} from "../../../services/cliente.service";
import { Recompensa } from 'src/app/shared/model/recompensa.model';
import {EmpresaService} from "../../../services/empresa.service";
import {Empresa} from "../../../shared/model/empresa.model";
import moment from "moment";

@Component({
  selector: 'app-recompensa-update',
  templateUrl: './recompensa-update.page.html',
  styleUrls: ['./recompensa-update.page.scss'],
})
export class RecompensaUpdatePage {

  @Input() idCliente: number;

  clientes: Cliente[] = [];
  recompensas: Recompensa[] = [];
  empresa: Empresa;
  momento = Date.now();

  editForm = this.fb.group({
    codigo: [],
    pontoAtivo: [],
    valorCompra: [],
    dataCompra: [],
    idCliente: [],
    idEmpresa: [],
    idRecompensa: []
  });

  constructor(
      public modalController: ModalController,
      private fb: FormBuilder,
      private clienteService: ClienteService,
      private pontoService: PontoService,
      private recompensaService: RecompensaService,
      private empresaService: EmpresaService
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
    this.modalController.dismiss({});
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
    };
    return ponto;
  }

  create() {
    const ponto = this.createFromForm();
    this.pontoService.create(ponto)
      .subscribe( res => {
        console.log(res);
        this.modalController.dismiss();
      });
  }

}

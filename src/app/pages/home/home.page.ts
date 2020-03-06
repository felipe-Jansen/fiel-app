import { Component } from '@angular/core';
import {AccountService} from "../../services/auth/account.service";
import {EmpresaService} from "../../services/empresa.service";
import {Cliente} from "../../shared/model/cliente.model";
import {ClienteService} from "../../services/cliente.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clientes: Cliente[] = [];
  searchFilter = false;

  constructor(
      private accountService: AccountService,
      private clienteService: ClienteService,
      private empresaService: EmpresaService,
      public loadingController: LoadingController
  ) {}

  async ionViewWillEnter(){
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos procurando seus clientes!'
    });
    await loading.present();
    this.getClientes();
  }

  getClientes() {
    this.searchFilter = true;
    this.empresaService.getEmpresaLogada().then(res => {
      this.clienteService.findAll({
        'empresaId': res.codigo
      }).subscribe( (res) => {
            this.clientes = res;
            this.loadingController.dismiss();
            this.searchFilter = false;
          }, (err) => {
            this.loadingController.dismiss();
            this.searchFilter = false;
      });
    });
  }

    searchCliente(value: string) {
      this.searchFilter = true;
      this.empresaService.getEmpresaLogada().then(res => {
        this.clienteService.findAll({
          'empresaId': res.codigo,
          'nome': value
        }).subscribe( (res) => {
          this.clientes = res;
          this.searchFilter = false;
        });
      });
    }
}

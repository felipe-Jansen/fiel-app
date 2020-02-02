import { Component } from '@angular/core';
import {AccountService} from "../../services/auth/account.service";
import {EmpresaService} from "../../services/empresa.service";
import {Cliente} from "../../shared/model/cliente.model";
import {ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clientes: Cliente[] = [];

  constructor(
      private accountService: AccountService,
      private clienteService: ClienteService,
      private empresaService: EmpresaService
  ) {}

  ionViewWillEnter(){
    this.getClientes();
  }

  getClientes() {
    this.empresaService.getEmpresaLogada().then(res => {
      this.clienteService.findAll({
        'empresa': res.codigo
      }).subscribe( (res) => {
            this.clientes = res;
          });
    });

  }
}

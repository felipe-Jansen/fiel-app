import { Component, OnInit } from '@angular/core';
import {FinanceiroService} from "../../services/financeiro.service";
import {EmpresaService} from "../../services/empresa.service";
import {Financeiro} from "../../shared/model/financeiro.model";

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {


  fincanceiros: Financeiro[] = [];

  constructor(
      protected financeiroService: FinanceiroService,
      protected empresaService: EmpresaService
  ) { }

  ionViewWillEnter() {
    this.findAll();
  }

  ngOnInit() {}

  findAll() {
    this.empresaService.getEmpresaLogada().then(res => {
      this.financeiroService.findAll({
        'empresaId': res.codigo
      }).subscribe(financeiro => {
        this.fincanceiros = financeiro;
      })
    })
  }

}

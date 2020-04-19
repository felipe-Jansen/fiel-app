import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FinanceiroService} from "../../../services/financeiro.service";
import {Empresa, IEmpresa} from "../../../shared/model/empresa.model";
import * as moment from "moment";
import {Financeiro, IFinanceiro} from "../../../shared/model/financeiro.model";
import {EmpresaService} from "../../../services/empresa.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DATE_FORMAT, DATE_TIME_FORMAT} from "../../../shared/input.constants";
import {AlertController, LoadingController} from "@ionic/angular";
import {UtilService} from "../../../shared/util/util.service";

@Component({
  selector: 'app-form-financeiro',
  templateUrl: './form-financeiro.page.html',
  styleUrls: ['./form-financeiro.page.scss'],
})
export class FormFinanceiroPage implements OnInit {

  idFinanceiro = this.route.snapshot.params['id'];

  editForm = this.fb.group({
    codigo: [],
    valor: [],
    dataCadastro: [],
    dataPagamento: [],
    descricao: [],
    tipo: [],
    idEmpresa: [],
    status: []
  });

  valor;

  constructor(
      private route: ActivatedRoute,
      protected fb: FormBuilder,
      protected financeiroService: FinanceiroService,
      protected empresaService: EmpresaService,
      protected alertController: AlertController,
      protected router: Router,
      protected utilService: UtilService
  ) { }

  async ionViewWillEnter() {
    if (this.idFinanceiro) {
      this.financeiroService.find(this.idFinanceiro).subscribe(res => {
        console.log(res);
        this.updateForm(res);
      });
    }
    await this.empresaService.getEmpresaLogada().then(res => {
      this.editForm.patchValue({
        idEmpresa: res.codigo
      })
    });
  }

  ngOnInit() {
  }

  updateForm(financeiro: Financeiro) {
    this.valor = financeiro.valor;
    this.editForm.patchValue({
      codigo: financeiro.codigo,
      valor: financeiro.valor,
      dataCadastro: financeiro.dataCadastro,
      dataPagamento: financeiro.dataPagamento,
      descricao: financeiro.descricao,
      tipo: financeiro.tipo,
      idEmpresa: financeiro.idEmpresa,
      status: financeiro.status
    });
    console.log(this.editForm);
  }

  private criarDoForm(): IFinanceiro {
    const entity = {
      ...new Financeiro(),
      codigo: this.editForm.get(['codigo']).value,
      valor: this.editForm.get(['valor']).value,
      dataCadastro: this.editForm.get(['dataCadastro']).value ? moment(this.editForm.get(['dataCadastro']).value, DATE_TIME_FORMAT).format(DATE_FORMAT) : null,
      dataPagamento: this.editForm.get(['dataPagamento']).value ? moment(this.editForm.get(['dataPagamento']).value, DATE_TIME_FORMAT).format(DATE_FORMAT) : null,
      descricao: this.editForm.get(['descricao']).value,
      tipo: this.editForm.get(['tipo']).value,
      status: this.editForm.get(['status']).value,
      idEmpresa: this.editForm.get(['idEmpresa']).value,
    };
    return entity;
  }

  salvar() {
    let financeiro = this.criarDoForm();
    console.log(financeiro);
    if (!financeiro.codigo){
      this.financeiroService.save(financeiro).subscribe(res => {
        this.showAlertCriado();
      }, err => {
        this.utilService.showAlertErro();
      });
    } else {
      this.financeiroService.update(financeiro).subscribe(res => {
        this.showAlertAtualizado()
      }, err => {
        this.utilService.showAlertErro();
      });
    }
  }

  async showAlertCriado() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Registro criado com sucesso! :)',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            this.router.navigate(['financeiro']);
          }
        }
      ]
    });
    await alert.present();
  }

  async showAlertAtualizado() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Registro atualizado com sucesso! :)',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            this.router.navigate(['financeiro']);
          }
        }
      ]
    });
    await alert.present();
  }

}

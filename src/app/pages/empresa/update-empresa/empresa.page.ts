import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmpresaService} from "../../../services/empresa.service";
import {Empresa, IEmpresa} from "../../../shared/model/empresa.model";
import * as moment from 'moment';
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {UtilService} from "../../../shared/util/util.service";


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  editForm = this.fb.group({
    isPessoa: [],
    foto: [],
    cpf: [],
    cnpj: [],
    razaoSocial: [],
    nome: [],
    sobrenome: [],
    telefone: ['', [Validators.minLength(16)]],
    cep: ['', [Validators.minLength(10)]],
    rua: [],
    bairro: [],
    cidade: [],
    estado: [],
    numero: [],
    pontoReferencia: [],
    complemento: [],
    dataNascimento: [],
    email: ['', [Validators.email]],
    senha: [],
    confirmaSenha: [],
    latitude: [],
    longitude: []
  });


  constructor(
      protected fb: FormBuilder,
      protected empresaService: EmpresaService,
      protected alertController: AlertController,
      protected router: Router,
      protected utilService: UtilService
  ) { }

  ionViewWillEnter() {
  }

  ngOnInit() {
  }

  private criarDoForm(): IEmpresa {
    const entity = {
      ...new Empresa(),
      cpf: this.editForm.get(['cpf']).value,
      cnpj: this.editForm.get(['cnpj']).value,
      razaoSocial: this.editForm.get(['razaoSocial']).value,
      nome: this.editForm.get(['nome']).value,
      sobrenome: this.editForm.get(['sobrenome']).value,
      telefone: this.editForm.get(['telefone']).value,
      cep: this.editForm.get(['cep']).value,
      rua: this.editForm.get(['rua']).value,
      bairro: this.editForm.get(['bairro']).value,
      cidade: this.editForm.get(['cidade']).value,
      estado: this.editForm.get(['estado']).value,
      numero: this.editForm.get(['numero']).value,
      pontoReferencia: this.editForm.get(['pontoReferencia']).value,
      complemento: this.editForm.get(['complemento']).value,
      email: this.editForm.get(['email']).value,
      senha: this.editForm.get(['senha']).value,
      foto: this.editForm.get(['foto']).value,
      dataCadastro: moment(new Date()).format('YYYY-MM-DD'),
      dataNascimento: moment(new Date (this.editForm.get(['dataNascimento']).value)).format('YYYY-MM-DD')
    };
    return entity;
  }

  cadastrar() {
    let empresaDTO = this.criarDoForm();
    this.empresaService.save(empresaDTO)
        .subscribe(async res => {
          const alert = await this.alertController.create({
            header: 'Parabéns!',
            message: 'Conta criada com sucesso :) !',
            buttons: [
              {
                text: 'Fechar',
                handler: () => {
                  this.router.navigate(['/'])
                }
              }
            ]
          });
          await alert.present();
        }, async err => {
          const alert = await this.alertController.create({
            header: 'Que Pena!',
            message: err.error[0].mensagemUsuario + ' :( !',
            buttons: [
              {
                text: 'Fechar'
              }
            ]
          });
          await alert.present();
        })
  }

  buscaCep(cep: string) {
    if (cep.length >= 10 ) {
      this.utilService.getEnderecoCepWidenet(cep.replace(/[^a-zA-Z0-9 ]/g,    '')).subscribe(
          (endereco: any) => {
            this.editForm.controls.rua.setValue(endereco.address);
            this.editForm.controls.bairro.setValue(endereco.district);
            this.editForm.controls.cidade.setValue(endereco.city);
            this.editForm.controls.estado.setValue(endereco.state);
          },
          error => {}
      );
    }
  }

}

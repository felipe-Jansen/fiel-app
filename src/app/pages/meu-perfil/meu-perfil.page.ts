import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmpresaService} from "../../services/empresa.service";
import {AlertController, Events} from "@ionic/angular";
import {Router} from "@angular/router";
import {Empresa, IEmpresa} from "../../shared/model/empresa.model";
import * as moment from "moment";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.page.html',
  styleUrls: ['./meu-perfil.page.scss'],
})
export class MeuPerfilPage implements OnInit {

  editForm = this.fb.group({
    codigo: [],
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
    longitude: [],
    idUser: []
  });


  constructor(
      protected fb: FormBuilder,
      protected empresaService: EmpresaService,
      protected alertController: AlertController,
      protected router: Router,
      protected loginService: LoginService,
      public events: Events

  ) { }

  ionViewWillEnter() {
    this.empresaService.getEmpresaLogada().then(res => {
      console.log(res);
      this.updateForm(res);
    })
  }

  updateForm(empresa: Empresa) {
    console.log(empresa);
    this.editForm.patchValue({
      codigo: empresa.codigo,
      cpf: empresa.cpf,
      cnpj: empresa.cnpj,
      razaoSocial: empresa.razaoSocial,
      nome: empresa.nome,
      sobrenome: empresa.sobrenome,
      telefone: empresa.telefone,
      cep: empresa.cep,
      rua: empresa.rua,
      bairro: empresa.bairro,
      cidade: empresa.cidade,
      estado: empresa.estado,
      numero: empresa.numero,
      pontoReferencia: empresa.pontoReferencia,
      complemento: empresa.complemento,
      dataNascimento: empresa.dataNascimento,
      latitude: empresa.latitude,
      longitude: empresa.longitude,
      idUser: empresa.idUser
    });
    console.log(this.editForm);
  }

  ngOnInit() {
  }

  private criarDoForm(): IEmpresa {
    const entity = {
      ...new Empresa(),
      codigo: this.editForm.get(['codigo']).value,
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
      dataNascimento: moment(new Date (this.editForm.get(['dataNascimento']).value)).format('YYYY-MM-DD'),
      idUser: this.editForm.get(['idUser']).value
    };
    return entity;
  }

  salvar() {
    let empresaDTO = this.criarDoForm();
    console.log(empresaDTO);
    this.empresaService.update(empresaDTO)
        .subscribe(async res => {
          const alert = await this.alertController.create({
            header: 'Parabéns!',
            message: 'Dados atualizados :) !',
            buttons: [
              {
                text: 'Fechar',
                handler: () => {
                  this.events.publish('user:logged');
                  this.router.navigate(['/home']);
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

  logout() {
    this.loginService.logout();
  }

}

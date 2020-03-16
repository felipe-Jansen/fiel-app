import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmpresaService} from "../../services/empresa.service";
import {ActionSheetController, AlertController, Events, LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {Empresa, IEmpresa} from "../../shared/model/empresa.model";
import * as moment from "moment";
import {LoginService} from "../../services/login/login.service";
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {UtilService} from "../../shared/util/util.service";
import {AccountService} from "../../services/auth/account.service";
import {User} from "../../shared/model/user.model";


@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.page.html',
  styleUrls: ['./meu-perfil.page.scss'],
})
export class MeuPerfilPage implements OnInit {

  img = '../assets/externas/camera.png';

  editForm = this.fb.group({
    codigo: [],
    isPessoa: [],
    foto: [],
    foto_url: [],
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
    confirmaSenha: [],
    latitude: [],
    longitude: [],
    idUser: [],
    email: ['', [Validators.email]]
  });


  constructor(
      protected fb: FormBuilder,
      protected empresaService: EmpresaService,
      protected alertController: AlertController,
      protected router: Router,
      protected loginService: LoginService,
      public events: Events,
      protected camera: Camera,
      protected actionSheetController: ActionSheetController,
      protected toast: ToastController,
      protected utilService: UtilService,
      protected accountService: AccountService,
      public loadingController: LoadingController
  ) { }

  ionViewWillEnter() {
    this.empresaService.getEmpresaLogada().then(res => {
      this.updateForm(res);
      res.foto_url ? this.img = res.foto_url : '../assets/externas/camera.png';
    });
  }

  updateForm(empresa: Empresa) {
    this.editForm.patchValue({
      codigo: empresa.codigo,
      email: empresa.email,
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
      idUser: empresa.idUser,
      foto_url: empresa.foto_url
    });
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
      foto: this.editForm.get(['foto']).value,
      dataCadastro: moment(new Date()).format('YYYY-MM-DD'),
      dataNascimento: moment(new Date (this.editForm.get(['dataNascimento']).value)).format('YYYY-MM-DD'),
      idUser: this.editForm.get(['idUser']).value,
      foto_url: this.editForm.get(['foto_url']).value,
    };
    return entity;
  }

  async salvar() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos atualizando seus dados!'
    });
    await loading.present();
    let empresaDTO = this.criarDoForm();
    this.empresaService.update(empresaDTO)
        .subscribe(async res => {
          this.loadingController.dismiss();
          this.events.publish('user:logged');
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
          this.loadingController.dismiss();
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

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Escolha uma opção',
      buttons: [{
        text: 'Câmera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          this.openCamera();
        }
      }, {
        text: 'Galeria',
        icon: 'image',
        handler: () => {
          this.openGaleria();
        }
      }]
    });
    await actionSheet.present();
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.setaImagem(imageData);
    }, (err) => {
      this.showToast('Você deve autorizar o aplicativo a acessar a câmera !');
    });
  }

  openGaleria() {
    const options: CameraOptions = {
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      mediaType: this.camera.MediaType.PICTURE,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 70
    };

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
      this.setaImagem(imageData);
    }, (err) => {
      this.showToast('Você deve autorizar o aplicativo a acessar a sua galeria de fotos !');
    });
  }

  setaImagem(imageData: any) {
    this.img = 'data:image/jpeg;base64,' + imageData;
    this.editForm.patchValue({
      foto: imageData
    });
  }

  async showToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
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

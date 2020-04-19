import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EmpresaService} from "../../../services/empresa.service";
import {Empresa, IEmpresa} from "../../../shared/model/empresa.model";
import * as moment from 'moment';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  MenuController,
  ToastController
} from "@ionic/angular";
import {Router} from "@angular/router";
import {UtilService} from "../../../shared/util/util.service";
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  img = './assets/externas/camera.png';
  editForm = this.fb.group({
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
    email: ['', [Validators.email]],
    senha: [],
    confirmaSenha: [],
    latitude: [],
    longitude: [],
    parametroPonto: [],
  });
  mostraAlert = true;

  constructor(
      protected fb: FormBuilder,
      protected empresaService: EmpresaService,
      protected alertController: AlertController,
      protected router: Router,
      protected utilService: UtilService,
      public menuCtrl: MenuController,
      protected toast: ToastController,
      protected actionSheetController: ActionSheetController,
      protected camera: Camera,
      public loadingController: LoadingController
  ) {
    this.menuCtrl.enable(false);
  }

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
      // dataNascimento: moment(new Date (this.editForm.get(['dataNascimento']).value)).format('YYYY-MM-DD'),
      foto_url: this.editForm.get(['foto_url']).value,
      parametroPonto: this.editForm.get(['parametroPonto']).value
    };
    return entity;
  }

  async cadastrar() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos validando seus dados!'
    });
    await loading.present();
    let empresaDTO = this.criarDoForm();
    this.empresaService.save(empresaDTO)
        .subscribe(async res => {
          this.loadingController.dismiss();
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

  async showToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
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
      quality: 100,
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
      quality: 100
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

  async mostraExplicacao() {
    if (this.mostraAlert) {
      this.loadingController.dismiss();
      const alert = await this.alertController.create({
        header: 'Informação Importante!',
        message: 'Esse é o parâmetro para a realização dos cálculos para obter os pontos através das vendas. <br><br>' +
            ' <strong>Cálculo:</strong> A porcentagem do valor informado sobre a venda realizada é o total de pontos que será obtido <br><br>' +
            '<strong>Ex.:</strong> Em uma venda de R$ 100,00 com parâmetro de 28% irá resultar em um total de 28 pontos',
        buttons: [
          {
            text: 'Fechar',
            handler: () => {
              this.mostraAlert = false;
            }
          }
        ]
      });
      await alert.present();
    }
  }

  verificaValor() {
    console.log(this.editForm.get(['parametroPonto']).value);
    if (this.editForm.get(['parametroPonto']).value <= 0 || this.editForm.get(['parametroPonto']).value > 100){
      this.editForm.get(['parametroPonto']).setErrors({"errorValor": true})
    }
  }

  isValidoCpf(cpf: string) {
    console.log(cpf.replace(/[^a-zA-Z0-9 ]/g,    ''));
    if (!UtilService.isValidoCpf(cpf.replace(/[^a-zA-Z0-9 ]/g,    ''))) {
      this.editForm.get(['cpf']).setErrors({ cpfInvalido: true });
    }
  }

}

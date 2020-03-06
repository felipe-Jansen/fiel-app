import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Cliente, ICLiente} from "../../../shared/model/cliente.model";
import moment from "moment";
import {IRecompensa, Recompensa} from "../../../shared/model/recompensa.model";
import {RecompensaService} from "../../../services/recompensa.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TipoRecompensaService} from "../../../services/tipo-recompensa.service";
import {ITipoRecompensa} from "../../../shared/model/tipo-recompensa.model";
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-update-recompensa',
  templateUrl: './update-recompensa.page.html',
  styleUrls: ['./update-recompensa.page.scss'],
})
export class UpdateRecompensaPage implements OnInit {

  idRecompensa: number;

  editForm = this.fb.group({
    codigo: [],
    totalPontos: [],
    dataCadastro: [],
    idEmpresa: [],
    qtdEstoque: [],
    idTipoRecompensa: [],
    descricao: []
  });

  tipoRecompensas: ITipoRecompensa[] = [];

  constructor(
      private fb: FormBuilder,
      private recompensaService: RecompensaService,
      private router: Router,
      private tipoRecompensaService: TipoRecompensaService,
      public loadingController: LoadingController,
      protected alertController: AlertController,
      private activeRoute: ActivatedRoute
  ) { }

  private createFromForm(): IRecompensa {
    return {
      ...new Recompensa(),
      codigo: this.editForm.get(['codigo']).value,
      totalPontos: this.editForm.get(['totalPontos']).value,
      dataCadastro: this.editForm.get(['dataCadastro']).value,
      idEmpresa: this.editForm.get(['idEmpresa']).value,
      idTipoRecompensa: this.editForm.get(['idTipoRecompensa']).value,
      descricao: this.editForm.get(['descricao']).value,
      qtdEstoque: this.editForm.get(['qtdEstoque']).value,
    }
  }


  ionViewWillEnter() {
    this.idRecompensa = this.activeRoute.snapshot.params.idRecompensa;
    this.getTiposRecompensas();
    this.edicaoRecompensa();
  }

  private updateForm(recompensa: IRecompensa) {
    this.editForm.patchValue({
      codigo: recompensa.codigo,
      totalPontos: recompensa.totalPontos,
      dataCadastro: recompensa.dataCadastro,
      idEmpresa: recompensa.idEmpresa,
      idTipoRecompensa: recompensa.idTipoRecompensa,
      descricao: recompensa.descricao,
      qtdEstoque: recompensa.qtdEstoque
    });
  }

  private edicaoRecompensa() {
    if (this.idRecompensa) {
      this.recompensaService.find(this.idRecompensa).subscribe(recompensa => {
        this.updateForm(recompensa);
      });
    }
  }

  getTiposRecompensas() {
    this.tipoRecompensaService.findAll()
        .subscribe(res => {
          console.log(res);
          this.tipoRecompensas = res;
        });
  }

  ngOnInit() {
  }

  async save() {
    if (this.idRecompensa) {
      this.update();
    } else {
      this.create();
    }
  }

  async update() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos atualizando a sua recompensa!'
    });
    await loading.present();
    let recompensa = this.createFromForm();
    console.log(recompensa);
    this.recompensaService.update(recompensa)
        .subscribe(async res => {
          this.loadingController.dismiss();
          const alert = await this.alertController.create({
            header: 'Sucesso!',
            message: 'Recompensa atualizada com sucesso! :)',
            buttons: [
              {
                text: 'Fechar',
                handler: () => {
                  this.router.navigate(['grid-recompensa']);
                }
              }
            ]
          });
          await alert.present();
        }, async err => {
          console.log('erro = ', err);
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

  async create() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos criando a sua recompensa!'
    });
    await loading.present();
    let recompensa = this.createFromForm();
    console.log(recompensa);
    this.recompensaService.create(recompensa)
        .subscribe(async res => {
          this.loadingController.dismiss();
          const alert = await this.alertController.create({
            header: 'Sucesso!',
            message: 'Recompensa criada com sucesso! :)',
            buttons: [
              {
                text: 'Fechar',
                handler: () => {
                  this.router.navigate(['grid-recompensa']);
                }
              }
            ]
          });
          await alert.present();
        }, async err => {
          console.log('erro = ', err);
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

}

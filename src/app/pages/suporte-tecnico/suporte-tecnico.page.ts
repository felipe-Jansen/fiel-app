import { Component, OnInit } from '@angular/core';
import {SuporteService} from "../../services/suporte.service";
import {FormBuilder} from "@angular/forms";
import {Cliente, ICLiente} from "../../shared/model/cliente.model";
import moment from "moment";
import {ISuporte, Suporte} from "../../shared/model/suporte.model";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-suporte-tecnico',
  templateUrl: './suporte-tecnico.page.html',
  styleUrls: ['./suporte-tecnico.page.scss'],
})
export class SuporteTecnicoPage implements OnInit {

  editForm = this.fb.group({
    email: [],
    contato: [],
    descricao: []
  });

  constructor(
      private suporteService: SuporteService,
    private fb: FormBuilder,
    public loadingController: LoadingController,
      public alertController: AlertController,
      public router: Router
  ) { }

  ngOnInit() {
  }

  private createFromForm(): ISuporte {
    return {
      ...new Suporte(),
      email: this.editForm.get(['email']).value,
      telefone: this.editForm.get(['contato']).value,
      descricao: this.editForm.get(['descricao']).value
    }
  }

  async salvar() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos salvando seu novo cliente ! :)'
    });
    let suporte = this.createFromForm();
    this.suporteService.create(suporte).subscribe(async suporteCriado => {
      const alert = await this.alertController.create({
        header: 'Agradecemos o seu Feedback!',
        message: 'Poderemos entrar em contato a qualquer momento para maiores esclarecimentos :) !',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.router.navigateByUrl('/home');
            }
          }
        ]
      });
      await alert.present();
    })
  }

}

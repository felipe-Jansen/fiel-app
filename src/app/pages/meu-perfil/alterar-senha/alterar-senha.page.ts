import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AccountService} from "../../../services/auth/account.service";
import {Empresa, IEmpresa} from "../../../shared/model/empresa.model";
import * as moment from "moment";
import {IUser, User} from "../../../shared/model/user.model";
import {NavController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  editForm = this.fb.group({
    codigo: [],
    email: [],
    confirmacaoSenha: [],
    senha: [],
  });

  constructor(
      protected fb: FormBuilder,
      protected accountService: AccountService,
      protected navController: NavController,
      public toastController: ToastController
  ) { }

  ngOnInit() {
    this.accountService.fetch().subscribe(userLogado => {
      this.updateForm(userLogado.body);
    })
  }

  salvar(){
    let user = this.criarDoForm();
    this.accountService.update(user).subscribe(userAtualizado => {
      this.showToast('Sua senha foi atualizada com sucesso!');
      this.navController.navigateRoot('/meu-perfil');
    }, error => {
      this.showToast('Que pena! Não foi possível atualizar sua senha! Entre em contato com o administrador do sistema!');
    })
  }

  private updateForm(body: any) {
    this.editForm.patchValue({
      codigo: body.id,
      email: body.username,
    })
  }

  private criarDoForm(): IUser {
    const entity = {
      ...new User(),
      codigo: this.editForm.get(['codigo']).value,
      email: this.editForm.get(['email']).value,
      senha: this.editForm.get(['senha']).value
    };
    return entity;
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }

}

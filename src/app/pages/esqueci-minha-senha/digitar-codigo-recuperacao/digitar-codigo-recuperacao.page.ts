import {Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from "../../../services/user.service";
import {LoadingController, MenuController, ToastController} from "@ionic/angular";
import {IUser, User} from "../../../shared/model/user.model";
import {FormBuilder} from "@angular/forms";
import {AccountService} from "../../../services/auth/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-digitar-codigo-recuperacao',
  templateUrl: './digitar-codigo-recuperacao.page.html',
  styleUrls: ['./digitar-codigo-recuperacao.page.scss'],
})
export class DigitarCodigoRecuperacaoPage implements OnInit {

  editForm = this.fb.group({
    codigo: [],
    email: [],
    senha: [],
    confirmacaoSenha: [],
    codigo_recuperacao: []
  });

  parte1 : string;
  parte2 : string;
  parte3 : string;
  parte4 : string;
  parte5 : string;
  parte6 : string;

  user: IUser;

  constructor(
      private usuarioService: UsuarioService,
      public toastController: ToastController,
      protected fb: FormBuilder,
      protected accountService: AccountService,
      protected router: Router,
      public loadingController: LoadingController,
      public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  gotoToNextField(nextElement) {
      nextElement.setFocus();
  }


  ngOnInit() {
  }

  async pesquisarUser() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos validando o código digitado!'
    });
    await loading.present();
    this.usuarioService.getByCodigoRecuperacao(this.parte1+this.parte2+this.parte3+this.parte4+this.parte5+this.parte6)
        .subscribe(res => {
          this.loadingController.dismiss();
          this.updateForm(res);
        }, err => {
          this.loadingController.dismiss();
          this.showToast('Que pena! Não encontramos nenhuma empresa com o código digitado!', 5000);
        })
  }

  updateForm(user: IUser) {
    this.editForm.patchValue({
      codigo: user.codigo,
      email: user.email
    })
  }

  async showToast(msg: string, duration: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
    });
    toast.present();
  }

  private criarDoForm(): IUser {
    const entity = {
      ...new User(),
      codigo: this.editForm.get(['codigo']).value,
      email: this.editForm.get(['email']).value,
      senha: this.editForm.get(['senha']).value,
      codigo_recuperacao: null
    };
    return entity;
  }

  salvar() {
    let user = this.criarDoForm();
    this.accountService.update(user).subscribe(userAtualizado => {
      this.showToast('Sua senha foi atualizada com sucesso!', 3000);
      this.router.navigateByUrl('/');
    }, error => {
      this.showToast('Que pena! Não foi possível atualizar sua senha!', 4000);
    })
  }

}

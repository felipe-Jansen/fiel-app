import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/user.service";
import {LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.page.html',
  styleUrls: ['./esqueci-minha-senha.page.scss'],
})
export class EsqueciMinhaSenhaPage implements OnInit {

  email: string;

  constructor(
      private usuarioService: UsuarioService,
      public toastController: ToastController,
      public loadingController: LoadingController,
      public router: Router
  ) { }

  ngOnInit() {
  }

  async enviarEmail(email: string) {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos processando sua solicitação!'
    });
    await loading.present();
    this.usuarioService.recoverPassword(email).subscribe(res => {
      this.loadingController.dismiss();
      this.showToast('Acabamos de enviar o código para o seu e-mail! Caso não tenha recebido, cheque a sua pasta de spams ou entre em contato com o administrador do sistema!', 5000);
      this.router.navigateByUrl('/esqueci-minha-senha/digitar-codigo-recuperacao');
    }, error => {
      this.loadingController.dismiss();
      this.showToast('Ops! Não encontramos seu e-mail, verifique se você digitou corretamente ou entre em contato com o administrador do sistema!', 5000)
    })
  }

  async showToast(msg: string, duration: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
    });
    toast.present();
  }


}

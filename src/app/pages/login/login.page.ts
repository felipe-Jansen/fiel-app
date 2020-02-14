import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {
  AlertController, Events,
  LoadingController,
  MenuController,
  NavController,
  Platform,
  ToastController
} from "@ionic/angular";
import {Router} from "@angular/router";
import {AccountService} from "../../services/auth/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// The account fields for the login form.
  account: { username: string; password: string; rememberMe: boolean } = {
    username: '',
    password: '',
    rememberMe: true
  };

  constructor(
      public loginService: LoginService,
      public toastController: ToastController,
      public navController: NavController,
      public menuCtrl: MenuController,
      public accountService: AccountService,
      public router: Router,
      public events: Events
  ) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewWillEnter() {
    this.accountService.loggedUser()
        .subscribe(res => {
          if (res){
            this.navController.navigateRoot('/home');
            this.events.publish('user:logged');
          }
        })
  }

  ngOnInit() {}

  doLogin() {
    this.account.username = this.account.username.toLowerCase().trim();
    this.loginService.login(this.account).then(
        (response) => {
          this.navController.navigateRoot('/home');
        },
        async (err) => {
          if (err.status === 401 ) {
            this.account.password = '';
            this.showToast(err.error.detail);
          } else if (err.status === 403) {
            this.account.password = '';
            this.showToast('Ops! Ocorreu um erro. Verifique suas credenciais e tente novamente');
          } else if (err.status === 404) {
            this.account.password = '';
            this.account.username = '';
            this.showToast('Ops! Não foi possível estabelecer uma conexão com o servidor!');
          }

        }
    );
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }


  async presentLoading(loading) {
    return await loading.present();
  }


}

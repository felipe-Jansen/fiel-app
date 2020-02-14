import {Component, EventEmitter} from '@angular/core';

import {Events, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Empresa} from "./shared/model/empresa.model";
import {AccountService} from "./services/auth/account.service";
import {LoginService} from "./services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      isAuthenticated: false
    },{
      title: 'Histórico',
      url: '/historico',
      icon: 'clock',
      isAuthenticated: true
    },{
      title: 'Recompensas',
      url: '/grid-recompensa',
      icon: 'analytics',
      isAuthenticated: true
    }
  ];

  empresa: Empresa;
  isAuthenticated = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private accountService: AccountService,
    private loginService: LoginService
  ) {
    this.initializeApp();
    events.subscribe('user:logged', () => {
      this.getPerfil();
    });
    events.subscribe('user:logout', () => {
      this.isAuthenticated = false;
    });
  }

  getPerfil() {
    this.isAuthenticated = true;
  }

  getUserAuthenticated() {
    this.accountService.loggedUser()
        .subscribe( user => {
          this.isAuthenticated = true;
        });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#067302');
      this.splashScreen.hide();
    });
  }

  logout() {
    this.loginService.logout();
  }

}

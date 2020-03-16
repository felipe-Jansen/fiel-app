import {Component, EventEmitter} from '@angular/core';

import {Events, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Empresa} from "./shared/model/empresa.model";
import {AccountService} from "./services/auth/account.service";
import {LoginService} from "./services/login/login.service";
import {EmpresaService} from "./services/empresa.service";

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
      title: 'Estatística',
      url: '/estatistica',
      icon: 'clock',
      isAuthenticated: true
    },{
      title: 'Recompensas',
      url: '/grid-recompensa',
      icon: 'analytics',
      isAuthenticated: true
    },{
      title: 'Meu Perfil',
      url: '/meu-perfil',
      icon: 'person',
      isAuthenticated: true
    }
  ];

  empresa = new Empresa();
  isAuthenticated = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private accountService: AccountService,
    private loginService: LoginService,
    private empresaService: EmpresaService
  ) {
    this.initializeApp();
    events.subscribe('user:logged', () => {
      this.getPerfil();
    });
  }

  getPerfil() {
    this.isAuthenticated = true;
    this.empresaService.getEmpresaLogada().then(empresa => {
      console.log(empresa);
      this.empresa = empresa;
    });
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

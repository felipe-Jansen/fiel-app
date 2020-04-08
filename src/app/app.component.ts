import {Component, EventEmitter} from '@angular/core';

import {Events, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Empresa} from "./shared/model/empresa.model";
import {AccountService} from "./services/auth/account.service";
import {LoginService} from "./services/login/login.service";
import {EmpresaService} from "./services/empresa.service";
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";

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
      title: 'Estatísticas',
      url: '/estatistica',
      icon: 'analytics',
      isAuthenticated: true
    },{
      title: 'Recompensas',
      url: '/grid-recompensa',
      icon: 'basket',
      isAuthenticated: true
    },{
      title: 'Minhas Anotações',
      url: '/grid-recompensa',
      icon: 'alert',
      isAuthenticated: true
    },{
      title: 'Registros Financeiros',
      url: '/financeiro',
      icon: 'logo-usd',
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
  introducedApp: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private accountService: AccountService,
    private loginService: LoginService,
    private empresaService: EmpresaService,
    private storage: Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  async isLogged(){
    await this.empresaService.getEmpresaLogada().then(empresa => {
      this.empresa = empresa;
    });
  }

  async getPerfil() {
    this.events.subscribe('user:logged', async () => {
      this.isAuthenticated = true;
      await this.empresaService.getEmpresaLogada().then(empresa => {
        this.empresa = empresa;
      });
      this.splashScreen.hide();
    });
  }

  introducingApp() {
    this.storage.get('app-was-introduced').then(appWasIntroduced => {
      if (appWasIntroduced) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['introduced-slides']);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#067302');
      this.introducingApp();
      this.getPerfil();
    });
  }

}

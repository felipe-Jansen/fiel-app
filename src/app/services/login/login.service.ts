import { Injectable } from '@angular/core';
import { AccountService } from '../auth/account.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Events} from "@ionic/angular";
import {Observable} from "rxjs";
import {Empresa} from "../../shared/model/empresa.model";
import {API_URL_V1} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
      protected accountService: AccountService,
      protected authServerProvider: AuthServerProvider,
      protected router: Router,
      protected http: HttpClient,
      public events: Events
  ) {}

  login(credentials, callback?) {
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
          data => {
            this.accountService.identity(true).then(account => {
              this.accountService.authenticate(account);
              if (account !== null) {
                // this.translate.use(account.langKey);
              }
              resolve(data);
              this.events.publish('user:logged');
            });
            return cb();
          },
          err => {
            this.logout();
            reject(err);
            return cb(err);
          }
      );
    });
  }

  async logout() {
    this.authServerProvider.logout().subscribe();
    this.accountService.authenticate(null);
    this.router.navigate(['/']);
  }

}

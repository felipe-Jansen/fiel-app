import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable, Subject } from 'rxjs';
import {API_URL_V1} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userIdentity: any;
  private authenticated: boolean;
  private authenticationState = new Subject<any>();

  constructor(private sessionStorage: SessionStorageService,
              private http: HttpClient) {}

  fetch(): Observable<HttpResponse<any>> {
    return this.http.get<any>(API_URL_V1 + '/usuarios/user_logado', { observe: 'response' });
  }

  loggedUser() : Promise<any> {
    return this.http.get<any>(API_URL_V1 + '/usuarios/user_logado')
        .toPromise()
        .then(res => {
          return res;
        });
  }

  save(account: any): Observable<HttpResponse<any>> {
    return this.http.post(API_URL_V1 + '/usuarios/user_logado', account, { observe: 'response' });
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[]): Promise<boolean> {
    return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
  }

  hasAnyAuthorityDirect(authorities: string[]): boolean {
    if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }

    for (let i = 0; i < authorities.length; i++) {
      if (this.userIdentity.authorities.includes(authorities[i])) {
        return true;
      }
    }

    return false;
  }

  hasAuthority(authority: string): Promise<boolean> {
    if (!this.authenticated) {
      return Promise.resolve(false);
    }

    return this.identity().then(
        id => {
          return Promise.resolve(id.authorities && id.authorities.includes(authority));
        },
        () => {
          return Promise.resolve(false);
        }
    );
  }

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this.userIdentity = undefined;
    }
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }
    return this.fetch()
        .toPromise()
        .then(response => {
          const account = response.body;
          if (account) {
            this.userIdentity = account;
            this.authenticated = true;
          } else {
            this.userIdentity = null;
            this.authenticated = false;
          }
          this.authenticationState.next(this.userIdentity);
          return this.userIdentity;
        })
        .catch(err => {
          this.userIdentity = null;
          this.authenticated = false;
          this.authenticationState.next(this.userIdentity);
          return null;
        });
  }

  isAuthenticated() {
    return this.authenticated;
  }

}

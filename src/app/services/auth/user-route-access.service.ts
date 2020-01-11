import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class UserRouteAccessService implements CanActivate {
constructor(
private router: Router,
private accountService: AccountService,
) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
      const authorities = route.data['authorities'];
      if (!this.accountService.isAuthenticated()) {
          this.alertaLogin();
      }
      return this.checkLogin(authorities, state.url);
    }

    async alertaLogin() {

    }

    checkLogin(authorities: string[], url: string): Promise<boolean> {
        return this.accountService.identity().then(account => {
        if (!authorities || authorities.length === 0) {
            return true;
        }
        if (account) {
            const hasAnyAuthority = this.accountService.hasAnyAuthority(authorities);
        if (hasAnyAuthority) {
            return true;
        }
        if (isDevMode()) {
            console.error('User has not any of required authorities: ', authorities);
        }
        return false;
    }

    return false;
    });
    }
}

import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router,private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): boolean {

    //check some condition
    if (this.authService.isLoggedIn()) {
      return true;
    }
    alert('You are not allowed to view this page');

    return false;
  }

}

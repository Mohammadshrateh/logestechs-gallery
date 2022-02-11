import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = false;
  private user: any;

  constructor(private router: Router) {
  }

  isLoggedIn() {
    return this.isLogged;
  }

  login(user: any) {
    this.isLogged = true;
    this.user = user;
    this.router.navigate(['/gallery']);

  }
}

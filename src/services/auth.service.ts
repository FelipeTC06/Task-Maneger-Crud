import { Router } from '@angular/router';
import { User } from './../class/user';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false;

  private showMenuSource = new BehaviorSubject<boolean>(false);
  public showMenu = this.showMenuSource.asObservable();

  constructor(
    private router: Router,
  ) { }

  public doLogin(user: User) {
    if (user.name === 'felipe@easyteam.rocks' && user.password === '123456') {
      this.userAuthenticated = true;
      this.showMenuSource.next(true);
      this.router.navigate(['']);
    } else {
      this.userAuthenticated = false;
      this.showMenuSource.next(false);
    }
  }

  public userIsAuthenticated() {
    return this.userAuthenticated
  }

}

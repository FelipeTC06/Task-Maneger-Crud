import { User } from '../../../class/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(
    private authSevice: AuthService,
  ) { }

  public ngOnInit(): void {
  }

  public doLogin() {
    this.authSevice.doLogin(this.user)
  }

}

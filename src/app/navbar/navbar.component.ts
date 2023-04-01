import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showMenu: boolean = false;


  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.showMenu.pipe(
      tap(show => this.showMenu = show)
    ).subscribe();
  }

}

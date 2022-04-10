import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = ''

  constructor(
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userName = this.cookie.get('member');
  }

  logout(){
    console.log('logout')
    this.cookie.deleteAll('/');
    this.router.navigate(['/auth/login'])
  }
}

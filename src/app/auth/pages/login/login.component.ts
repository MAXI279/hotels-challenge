import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = ''
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(8)
          ])
      }
    )
  }

  sendLogin(): void {
    const { username, password } = this.formLogin.value
    this.authService.sendCredentials(username, password)
      //TODO: 200 <400
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
        console.log('Session iniciada correcta', responseOk);
        const { tokenSession, data } = responseOk
        this.cookie.set('token', tokenSession, 4, '/') //TODO:📌📌📌📌
        this.router.navigate(['/'])
      },
      err => {
        this.error = err.error.error
        console.log(err);
      })

  }

}

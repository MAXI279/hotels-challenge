import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Airline } from '../../interfaces/Airline';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = ''
  airlines: Airline[] | undefined

  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {
    this.authService.getAirlines().subscribe({
      next: res => {
        this.airlines = res
      },
      error: err => console.log(err)
    });

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        airline: new FormControl('', [
          Validators.required
        ]),
        username: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(5)
          ])
      }
    )
  }

  sendLogin(): void {
    if(this.formLogin.valid){
      const { airline, username, password } = this.formLogin.value

      this.authService.sendCredentials(username, password)
        .subscribe({
          next: responseOk => {
            const { api_id, first_name, last_name } = responseOk.member
            this.cookie.set('token', api_id, { expires: 2, path: '/' })
            this.cookie.set('member', `${first_name} ${last_name}`, { expires: 2, path: '/' })
            this.router.navigate(['/'])
          },
          error: err => {
            this.error = err.error.error
            console.log(err);
          }
        })

    }else{
      this.error = 'Campos invalidos, por favor revise los datos ingresados'
    }

  }

}

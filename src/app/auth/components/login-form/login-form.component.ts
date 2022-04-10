import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Airline } from '../../interfaces/Airline';
import { LoginForm } from '../../interfaces/LoginForm';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  @Input() airlines: Airline[] | undefined;
  @Input() error: string | undefined;

  @Output() LoginFormSubmit = new EventEmitter<LoginForm>();

  constructor() { }

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
    if(!this.formLogin.valid){
      this.error = 'Invalid fields, please check your login info'
      return
    }
    this.LoginFormSubmit.emit(this.formLogin.value)
  }

}

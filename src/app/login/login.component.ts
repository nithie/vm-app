import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ],
  
})
export class LoginComponent implements OnInit {
  login:Login = {
    email:null,
    password:null,
  }

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}

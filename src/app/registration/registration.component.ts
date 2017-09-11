import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService],
})
export class RegistrationComponent implements OnInit {
  userdata: Registration = {
    name: null,
    email: null,
    password: null,
    reenter: null,
  };
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() { }

  addNewUser() {
    this.registrationService.addNewUser(this.userdata);
  }

}

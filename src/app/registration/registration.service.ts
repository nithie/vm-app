import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class RegistrationService {

  constructor(private http: Http, public snackBar: MdSnackBar) { }

  addNewUser(userData) {
    const url = '/api/register';
    this.http.post(url, userData).subscribe(data => {
      this.snackBar.open(`Welcome ${userData.name}`, 'Close', {
        duration: 3000
      });
    });
  }

}

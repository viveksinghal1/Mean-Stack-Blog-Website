import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  error = "";
  success = "";
  allFieldsValid = false;

  isFieldValid(field: string) {
    return (this.form.get(field).invalid && this.form.get(field).touched)
      || (this.form.get(field).untouched && this.submitted);
  }

  getErrorMsg(field: string, minlength: number) {
    let result = "";
    let errors = this.form.get(field).errors;
    let element = this.form.get(field);
    if (element.touched && errors.required) {
      result += "*" + field + " is required";
    }
    else if (element.touched && errors.minlength) {
      result = "*" + field + " must be at least " + minlength + " characters long";
    }
    return result;
  }

  reset() {
    if (this.submitted) {
      this.submitted = false;
      this.form.markAsUntouched();
      this.form.markAsPristine();
    }
  }

  login() {
    this.submitted = true;
    if (this.form.valid) {
      this.allFieldsValid = true;
      this._authUserService.loginUser(this.form.value)
      .subscribe(
        res => {
          this.success = "logged in";
          const expiresAt = moment().add(res.expiresIn, 'second');
          localStorage.setItem('token', res.idToken);
          localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
          localStorage.setItem('username', res.username);
          this._router.navigate(['/articles']);
        },
        err => {
          this.error = err.error;
          console.log(err);
          this.reset();
        }
      )
    }
  }

  constructor(private _authUserService: AuthUserService, private _router: Router,
     private fb: FormBuilder, private _dataService: DataService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

}

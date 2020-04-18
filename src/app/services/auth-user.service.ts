import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  header = "http://localhost:3000";
  
  // header = "";

  private _registerUrl = this.header +  "/register";
  private _loginUrl = this.header + "/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(this._registerUrl, user, {headers})
      .pipe(catchError(this.errorHandler));
  }

  loginUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(this._loginUrl, user, {headers})
      .pipe(catchError(this.errorHandler));

  }

  isLoggedIn() {
    // return !!localStorage.getItem('token');
    return !!this.getToken() && moment().isBefore(this.getExpiration()) && !!this.getUsername();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  // getUser() {
  //   return this.http.get<any>(this.header+"/users/" + this.getUsername())
  //   .pipe(catchError(this.errorHandler));
  // }

  // isUserValid() {
  //   this.getUser().subscribe(
  //     res => this.userValid = true,
  //     err => this.userValid = false
  //   )
  // }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
    this._router.navigate(['/articles']);
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}

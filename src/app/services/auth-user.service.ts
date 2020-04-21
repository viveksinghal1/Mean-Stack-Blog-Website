import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private _registerUrl = environment.host +  "/register";
  private _loginUrl = environment.host + "/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(this._registerUrl, user, {headers})
      .pipe(catchError(this.errorHandler));
  }

  loginUser(user) {
    console.log()
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(this._loginUrl, user, {headers})
      .pipe(catchError(this.errorHandler));

  }

  validateUsername(username): Observable<any> {
    return this.http.get<any>(environment.host+"/users/checkusername/?username="+username)
    .pipe(catchError(this.errorHandler));
  }

  validateEmail(email): Observable<any> {
    return this.http.get<any>(environment.host+"/users/checkemail/?email="+email)
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

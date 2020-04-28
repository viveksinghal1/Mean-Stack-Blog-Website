import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _authUserService: AuthUserService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._authUserService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/articles']);
      return false;
    }
  }
  
}

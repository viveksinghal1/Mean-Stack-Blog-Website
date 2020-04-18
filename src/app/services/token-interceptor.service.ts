import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthUserService } from './auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthUserService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()} ${authService.getUsername()}`,
      }
    });
    return next.handle(tokenizedReq)
  }

}

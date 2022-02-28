import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTAuthService } from '@services/jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public jWTAuthService: JWTAuthService, public router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.jWTAuthService.IsAuthUser()) {
        this.router.navigate(['auth/login']);
        return false;
      }
      
      return true;
  }

}

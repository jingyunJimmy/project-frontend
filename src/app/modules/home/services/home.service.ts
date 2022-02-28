import { Injectable } from '@angular/core';
import { CommonHttpService } from '@services/common-http.service'; 
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PageData } from '@interfaces/data';
import { JWTAuthService } from '@services/jwt-auth.service';

@Injectable()
export class HomeService {
  USER = 'USER';
  constructor(
    private commonHttpService: CommonHttpService,
    private jwtAuthService: JWTAuthService
  ) { }

  getTenantId() {
    const authData = JSON.parse(window.localStorage[this.USER]);
    if (authData) {
      return authData.activeTenant.tenantId;
    } else {
      return null;
    }
  }

  getTenantName() {
    return this.jwtAuthService.getTenantName();
  }

  getHomeData(param): Observable<PageData> {
    return this.commonHttpService.get<PageData>(environment.apiUrl + 'auth/data' , param);
  }

  logout() {
    this.jwtAuthService.logout();
  }
}
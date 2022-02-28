import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JWTAuthService {
    USER = 'USER'
    constructor(private commonHttpService: CommonHttpService) { }

    getUserInfo(): Observable<any> {
        if (window.localStorage[this.USER]) {
            const savedCredentials = JSON.parse(window.localStorage[this.USER]);
            return of(savedCredentials);
        }
    }

    IsAuthUser(): boolean {
        if (window.localStorage[this.USER] && JSON.parse(window.localStorage[this.USER]).decodedAccessToken) {
            return true;
        } else {
            return false;
        }
    }

    setLoginUserDetail(obj: any): void {
        window.localStorage[this.USER] = JSON.stringify(obj);
    }

    getTenantName(): Observable<any> {
        if (window.localStorage[this.USER]) {
            const savedCredentials = JSON.parse(window.localStorage[this.USER]);
            return of(savedCredentials?.activeTenant?.tenantName);
        }
    }

    validateToken(): Observable<boolean> {
        return this.commonHttpService.get<boolean>(environment.apiUrl + 'auth/data' , {});
    }

    logout(): void {
        window.localStorage.removeItem(this.USER);
    }
}
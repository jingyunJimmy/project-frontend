import { Injectable } from '@angular/core';
import { CommonHttpService } from '@services/common-http.service'; 
import { ApiResponseModel } from '@interfaces/api-response';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private commonHttpService: CommonHttpService) { }

  testAuth(param): Observable<ApiResponseModel> {
    return this.commonHttpService.get<ApiResponseModel>(environment.apiUrl + 'auth' , param);
  }

  connectToXero(): Observable<any> {
    return this.commonHttpService.get<any>(environment.apiUrl + 'auth/connect', {});
  }

  callbackHandler(param): Observable<ApiResponseModel> {
    return this.commonHttpService.get<ApiResponseModel>(environment.apiUrl + 'auth/callback' , param);
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { CommonHttpService } from '@services/common-http.service';
import { JWTAuthService } from '@services/jwt-auth.service';
import { CallbackComponent } from './pages/callback/callback.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent, CallbackComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthService,
        CommonHttpService,
        JWTAuthService
    ]
})
export class AuthModule { }
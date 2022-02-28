import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { JWTAuthService } from '@services/jwt-auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  constructor(
    private router: Router,
    private authService: AuthService,
    private jwtAuthService: JWTAuthService
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.authService.callbackHandler({url: this.router.url}).subscribe(response => {
        if (response) {
          this.jwtAuthService.setLoginUserDetail(response);
          this.router.navigate(['home']);
        } else {
          this.jwtAuthService.logout();
          this.router.navigate(['/']);
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}

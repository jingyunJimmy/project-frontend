import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  // form: FormGroup;

  constructor(
    // private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  login() {  
    this.subs.add(
      this.authService.connectToXero().subscribe(response => {
        const url = response.consentUrl
        if (url) {
          window.location.href = url;
        }     
      })
    );
  }

}

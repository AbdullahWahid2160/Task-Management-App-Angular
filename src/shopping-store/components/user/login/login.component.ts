import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthenticationService } from 'src/shopping-store/services/auth.service';
import { TokenService } from 'src/shopping-store/services/token.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
  ) {}

  login() {
    this.authService.authenticate(this.email, this.password);
  }
}

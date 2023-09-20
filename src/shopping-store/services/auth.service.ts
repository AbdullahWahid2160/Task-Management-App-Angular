import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {
  private baseUrl = 'https://api.escuelajs.co/api/v1/auth';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}
  authenticate(email: string, password: string) {
    const body = { email, password };
    return this.http
      .post(`${this.baseUrl}/login`, body)
      .pipe(
        tap((response: any) => {
          this.tokenService.setAccessToken(response.access_token);
          this.router.navigate(['/shopping-store/home']);
        }),
        catchError((error: any) => {
          alert(`Authentication failed: ${error.message}`);
          return throwError(() => new Error(error.message));
        })
      )
      .subscribe();
  }

  getUserProfile() {
    const profileUrl = `${this.baseUrl}/profile`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.tokenService.getAccessToken()}`
    );
    return this.http.get<User>(profileUrl, { headers: headers }).pipe(
      tap((data) => {
        return data;
      }),
      catchError((error) => {
        if (error.status === 401) {
          // Unauthorized - User not authenticated
          this.router.navigate(['/shopping-store/login']);
          return throwError(() => new Error(error.message));
        } else {
          return throwError(() => new Error(error.message));
        }
      })
    );
  }

  logout() {
    // Clear both access and refresh tokens
    this.tokenService.setAccessToken('');
  }
}

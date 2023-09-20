import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private localStorageKey = 'AccessToken';

  setAccessToken(token: string) {
    localStorage.setItem(this.localStorageKey, token);
  }

  getAccessToken() {
    return localStorage.getItem(this.localStorageKey);
  }
}

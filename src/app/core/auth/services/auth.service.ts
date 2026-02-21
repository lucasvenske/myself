import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserCredentials } from '../interfaces/user-credentials';
import { AuthTokenResponse } from '../interfaces/auth-token-response';
import { User } from '../interfaces/user';

function generateToken(): string {
  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 20; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(payload: UserCredentials): Observable<AuthTokenResponse> {
    return new Observable<AuthTokenResponse>((observer) => {
      setTimeout(() => {
        if (payload.user === 'lucasvenske01@gmail.com' && payload.password === '123') {
          observer.next({ token: generateToken() });
          observer.complete();
        } else {
          observer.error(
            new HttpErrorResponse({
              status: 401,
              statusText: 'Unauthorized',
            })
          );
        }
      }, 1000);
    });
  }

  logout() {
    return of({});
  }

  getCurrentUser(token: string): Observable<User> {
    return of({
      username: 'admin',
    });
  }

  refreshToken(token: string) {
    return of({ token: generateToken() });
  }

}

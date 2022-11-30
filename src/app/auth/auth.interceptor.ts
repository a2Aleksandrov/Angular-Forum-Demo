import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { ICreateUser } from '../shared/interfaces';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    return next.handle(request).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        // localhost:3000/api/login  || localhost:3000/api/register
        if (event.url?.endsWith('login') || event.url?.endsWith('register')) {
          this.authService.handleLogin(event.body as ICreateUser);
        } else if (event.url?.endsWith('logout')) {
          this.authService.handleLogout();
        }
      }
    }));
  }
}

/*
The interceptor handles the request and receives the result of that requrest. If the result is http response we have to check the request url.

If it ends with login or register, we call the auth service which stores for us the request body(the user data).

If it ends with logout we have to call the auth service to clear the user data by setting it to undefined
*/


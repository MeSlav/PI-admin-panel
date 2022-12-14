import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.auth.getToken().access || request.url.includes('auth/login')) return next.handle(request);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken().access}`
      }
    });
    return next.handle(request);
  }
}
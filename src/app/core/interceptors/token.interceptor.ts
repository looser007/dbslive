import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //read the token from the localStorage
    const token = localStorage.getItem('token');

    //decode
    const userDetails = localStorage.getItem('userDetails');
    const exp = JSON.parse(userDetails || '').exp;
    console.log(JSON.parse(userDetails || '').exp);

    //check the expiry date
    if (Date.now() > exp / 100) {
      console.log('tokebn is valid');
      request = request.clone({
        headers: request.headers.set('authorization', token || ''),
      });
      return next.handle(request);
    }
    else{
      this.router.navigate(['/users/login']);
      return next.handle(request);
    }
    
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // all requsts in angular are immutable
    //So we follow below steps
    //1.we clone the existing request object and at the time of creation of clone we will provide the extra info which is excepted for us
    console.log("inside the header interceptor")
    request=request.clone({headers:request.headers.set('Content-Type', 'application/json')});
    return next.handle(request);
  }
}

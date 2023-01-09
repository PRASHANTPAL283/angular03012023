import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key="prashant pal";
    const startTime=(new Date()).getTime();
    const req=request.clone({
      setHeaders:{
        api_key
      }
    })
    return next.handle(req).pipe( 
      map(event=>{
        if(event instanceof HttpResponse){
          const endtime=(new Date()).getTime();
          const diff=startTime-endtime;
          console.log("the event got succeeded in "+diff);
        
        }
        return event;
        
      })
    );
  }
}

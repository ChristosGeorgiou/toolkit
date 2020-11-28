import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';
import { NgxMaskModule } from 'ngx-mask';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${environment.apiUrl}/${req.url}` });
    return next.handle(apiReq);
  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    DateFnsModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }]
})
export class CoreModule { }

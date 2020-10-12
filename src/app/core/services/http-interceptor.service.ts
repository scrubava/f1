import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

// Basic http interceptor, to catch http errors globally and log them
@Injectable()
export class HttpInterceptorService {

    constructor(private loggerService: LoggerService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(event => {
            }, error => {
                if (error instanceof HttpErrorResponse) {
                    if (!navigator.onLine) {
                        this.loggerService.showMessage('No Internet Connection');
                    } else {
                        this.loggerService.logHttpError(request, error);
                    }
                }
            })
        );
    }
}

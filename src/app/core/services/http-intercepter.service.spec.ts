import {TestBed} from '@angular/core/testing';

import {HttpInterceptorService} from './http-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {LoggerService} from './logger.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HttpInterceptorService', () => {
    let service: HttpInterceptorService;
    let loggerServiceSpy: jasmine.SpyObj<LoggerService>;
    let httpClient: HttpClient;
    let http: HttpTestingController;

    beforeEach(() => {
        const loggerSpy = jasmine.createSpyObj('LoggerService', ['showMessage', 'logHttpError', 'logError']);

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpInterceptorService,
                    multi: true
                },
                {
                    provide: LoggerService,
                    useValue: loggerSpy
                }
            ]
        });

        service = TestBed.get(HTTP_INTERCEPTORS);
        loggerServiceSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
        httpClient = TestBed.inject(HttpClient);
        http = TestBed.inject(HttpTestingController);

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should log error', () => {
        httpClient.get('/any-url').subscribe(
            () => {},
            () => expect(loggerServiceSpy.logHttpError).toHaveBeenCalled()
        );

        const req = http.expectOne('/any-url');

        req.error(new ErrorEvent('Unauthorized error'), {
            status: 500
        });
    });
});

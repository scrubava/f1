import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {LoggerService} from './services/logger.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded'
            );
        }
    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpInterceptorService,
                    multi: true
                },
                LoggerService
            ]
        };
    }
}

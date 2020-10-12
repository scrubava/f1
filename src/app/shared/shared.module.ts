import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BaseComponent} from './components/base/base.component';
import {LoaderDirective} from './directives/loader.directive';
import {LoaderComponent} from './components/loader/loader.component';


@NgModule({
    declarations: [
        BaseComponent,
        LoaderDirective,
        LoaderComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        BaseComponent,
        LoaderDirective,
        LoaderComponent
    ]
})
export class SharedModule {
}

import {LoaderDirective} from './loader.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('LoaderDirective', () => {
    let fixture: ComponentFixture<TestLoaderDirectiveComponent>;

    const getDirective = (): LoaderDirective => {
        const debugElement = fixture.debugElement.query(By.directive(LoaderDirective));
        return debugElement.injector.get(LoaderDirective);
    };

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [
                TestLoaderDirectiveComponent,
                LoaderDirective
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .createComponent(TestLoaderDirectiveComponent);

        fixture.detectChanges();
    });

    it('should create an instance', () => {
        const directive = getDirective();
        expect(directive).toBeTruthy();
    });

    it('should show loader', () => {
        const directive = getDirective();
        directive.f1Loader = true;
        fixture.detectChanges();

        let loader = fixture.nativeElement.querySelectorAll('f1-loader');
        expect(loader.length).toBe(1);

        directive.f1Loader = false;
        fixture.detectChanges();

        loader = fixture.nativeElement.querySelectorAll('f1-loader');
        expect(loader.length).toBe(0);
    });
});

@Component({
    template: `
        <div [f1Loader]="true"></div>`
})
class TestLoaderDirectiveComponent {
}

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoaderComponent} from './loader.component';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render loader', () => {
        component.loading = true;
        fixture.detectChanges();
        let loader = fixture.nativeElement.querySelectorAll('.loader');

        expect(loader.length).toBe(1);

        component.loading = false;
        fixture.detectChanges();
        loader = fixture.nativeElement.querySelectorAll('.loader');

        expect(loader.length).toBe(0);
    });
});

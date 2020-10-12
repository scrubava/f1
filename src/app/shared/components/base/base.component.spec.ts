import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseComponent} from './base.component';
import {Subject} from 'rxjs';

describe('BaseComponent', () => {
    let component: BaseComponent;
    let fixture: ComponentFixture<BaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BaseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Ugly, but unsubscribe pattern is used across the app,
    // and must be tested in order to prevent memory leaks.
    // Making it public is not an option, so we have to bypass TS checks
    it('should call unsubscribe on destroy', () => {
        if (!!component['unsubscribe'] && component['unsubscribe'] instanceof Subject) {
            component['unsubscribe'].subscribe(() => expect(true).toBeTruthy());
            fixture.destroy();
        } else {
            fail('no unsubscribe subject exists');
        }
    });
});

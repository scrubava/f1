import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeasonComponent} from './season.component';
import {Season} from '../models/season.model';
import {Driver} from '../models/ergast/driver.model';
import {RouterTestingModule} from '@angular/router/testing';

describe('SeasonComponent', () => {
    let component: SeasonComponent;
    let fixture: ComponentFixture<SeasonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            declarations: [SeasonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SeasonComponent);
        component = fixture.componentInstance;
        component.season = seasonMock;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display season title', () => {
        const element = fixture.nativeElement;
        expect(element.querySelector('.season-title-season').textContent).toBe(seasonMock.season);
    });

    it('should display driver name', () => {
        const element = fixture.nativeElement;
        expect(element.querySelector('.season-title-champ').textContent).toBe(driverMock.givenName + ' ' + driverMock.familyName);
    });
});

const driverMock: Driver = {
    driverId: '1',
    url: 'http://test/1',
    givenName: 'testGivenName',
    familyName: 'testFamilyName',
    dateOfBirth: '1980-10-10',
    nationality: 'british'
};

const seasonMock: Season = {
    season: '2005',
    driver: driverMock
};





import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeasonListComponent} from './season-list.component';
import {ErgastService} from '../services/ergast.service';
import {Observable, of} from 'rxjs';
import {ErgastResponse} from '../models/ergast/ergast-response.model';
import {StandingsMRData} from '../models/ergast/standings-mrdata.model';
import {standingsFrom2005To2015} from '../services/ergast.mocks.spec';
import {SharedModule} from '../../../shared/shared.module';
import {SeasonComponent} from '../season/season.component';
import {Router} from '@angular/router';
import {ErgastConverterService} from '../services/ergast-converter.service';

describe('SeasonListComponent', () => {
    let component: SeasonListComponent;
    let fixture: ComponentFixture<SeasonListComponent>;
    let router: jasmine.SpyObj<Router>;

    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                SeasonListComponent,
                SeasonComponent
            ],
            providers: [
                {
                    provide: ErgastService,
                    useClass: ErgastServiceMock
                },
                {
                    provide: Router,
                    useValue: routerSpy
                },
                ErgastConverterService
            ]
        })
            .compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(SeasonListComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

        fixture.detectChanges();
    }));

    it('should create', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should show all champs', async(() => {
        const navElement = fixture.nativeElement;
        const rows = navElement.querySelectorAll('f1-season.leaf');

        expect(rows.length).toEqual(standingsFrom2005To2015.MRData.StandingsTable.StandingsLists.length);
    }));

    it('should click in component', () => {
        const rows = fixture.nativeElement.querySelectorAll('f1-season.leaf');
        const leaf = rows[0];
        const selectedSeason = standingsFrom2005To2015.MRData.StandingsTable.StandingsLists[0].season;

        leaf.click();
        expect(router.navigate).toHaveBeenCalledWith(['f1', 'seasons', selectedSeason]);
    });
});

class ErgastServiceMock {
    champions([yearStart, yearEnd]: [number, number], limit: number = 30, offset: number = 0): Observable<ErgastResponse<StandingsMRData>> {
        return of(standingsFrom2005To2015);
    }
}

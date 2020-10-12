import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeasonDetailsComponent} from './season-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable, of} from 'rxjs';
import {ErgastResponse} from '../models/ergast/ergast-response.model';
import {StandingsMRData} from '../models/ergast/standings-mrdata.model';
import {RaceMRData} from '../models/ergast/race-mrdata.model';
import {ErgastService} from '../services/ergast.service';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {resultsFor2006, standingsFor2006} from '../services/ergast.mocks.spec';
import {ErgastConverterService} from '../services/ergast-converter.service';

describe('SeasonDetailsComponent', () => {
    let component: SeasonDetailsComponent;
    let fixture: ComponentFixture<SeasonDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
                MatIconModule,
                CdkTableModule
            ],
            declarations: [SeasonDetailsComponent],
            providers: [
                {
                    provide: ErgastService,
                    useClass: ErgastServiceMock
                },
                ErgastConverterService
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SeasonDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should displayed data in table', async () => {
        const navElement = fixture.nativeElement;
        const rows = navElement.querySelectorAll('.cdk-row');
        const rowsHighlighted = navElement.querySelectorAll('.cdk-row.highlighted');

        expect(rows.length).toBe(resultsFor2006.MRData.RaceTable.Races.length);
        expect(rowsHighlighted.length).toBe(
            resultsFor2006.MRData.RaceTable.Races.filter(s => s.Results[0].Driver.driverId === standingsFor2006.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId).length
        );

        const firstRace = resultsFor2006.MRData.RaceTable.Races[0];
        const result = firstRace.Results[0];

        const seasonCell = rows[0].querySelector('.cdk-column-season');
        expect(seasonCell.textContent).toEqual(firstRace.season);

        const raceCell = rows[0].querySelector('.cdk-column-race');
        expect(raceCell.textContent).toBe(firstRace.raceName);

        const driverCell = rows[0].querySelector('.cdk-column-driver');
        expect(driverCell.textContent).toBe(result.Driver.givenName + ' ' + result.Driver.familyName);

        const constrCell = rows[0].querySelector('.cdk-column-constr');
        expect(constrCell.textContent).toBe(result.Constructor.name);

        const pointsCell = rows[0].querySelector('.cdk-column-points');
        expect(pointsCell.textContent).toBe(result.points);

        const statusCell = rows[0].querySelector('.cdk-column-status');
        expect(statusCell.querySelector('span').textContent).toBe(result.status);

        const timeCell = rows[0].querySelector('.cdk-column-time');
        expect(timeCell.querySelector('span').textContent).toBe(result.Time.time);
    });
});

class ErgastServiceMock {
    seasonChampion(season: string, limit: number = 30, offset: number = 0): Observable<ErgastResponse<StandingsMRData>> {
        return of(standingsFor2006);
    }

    winnersForSeason(season: string, limit: number = 30, offset: number = 0): Observable<ErgastResponse<RaceMRData>> {
        return of(resultsFor2006);
    }
}

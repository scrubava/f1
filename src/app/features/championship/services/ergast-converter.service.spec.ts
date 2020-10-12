import {TestBed} from '@angular/core/testing';
import {ErgastService} from './ergast.service';
import {ErgastConverterService} from './ergast-converter.service';
import {resultsFor2006, seasonDetailsFor2006, seasonsFrom2005To2015, standingsFor2006, standingsFrom2005To2015} from './ergast.mocks.spec';

describe('ErgastService', () => {
    let service: ErgastConverterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ErgastConverterService
            ]
        });

        service = TestBed.inject(ErgastConverterService);
    });

    it('should convert', () => {
        expect(service.standingsToSeasons(standingsFrom2005To2015)).toEqual(seasonsFrom2005To2015);
        expect(service.racesToSeasonDetails(resultsFor2006, standingsFor2006)).toEqual(seasonDetailsFor2006);
    });
});

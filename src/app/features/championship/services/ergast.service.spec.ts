import {TestBed} from '@angular/core/testing';

import {ErgastService} from './ergast.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {fullStandings, standingsFrom2005To2015} from './ergast.mocks.spec';

describe('ErgastService', () => {
    let service: ErgastService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        service = new ErgastService(httpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should filter', () => {
        service.champions([2005, 2015], 100)
            .subscribe(data => expect(data).toEqual(standingsFrom2005To2015));

        const req = httpTestingController.expectOne('https://ergast.com/api/f1/driverstandings/1.json?limit=100&offset=0');
        expect(req.request.method).toEqual('GET');
        req.flush(fullStandings);
        httpTestingController.verify();
    });
});

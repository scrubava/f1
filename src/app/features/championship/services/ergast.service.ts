import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StandingsMRData} from '../models/ergast/standings-mrdata.model';
import {ErgastResponse} from '../models/ergast/ergast-response.model';
import {RaceMRData} from '../models/ergast/race-mrdata.model';
import {map} from 'rxjs/operators';

@Injectable()
export class ErgastService {
    private static readonly api: string = 'https://ergast.com/api/f1';

    constructor(private http: HttpClient) {

    }

    private static endpoint(query: string): string {
        return `${ErgastService.api}/${query}.json`;
    }

    seasonChampion(season: string, limit: number = 30, offset: number = 0): Observable<ErgastResponse<StandingsMRData>> {
        return this.http.get<ErgastResponse<StandingsMRData>>(ErgastService.endpoint(`${season}/driverstandings/1`),
            {
                params: new HttpParams().set('limit', limit.toString()).set('offset', offset.toString())
            });
    }

    champions([yearStart, yearEnd]: [number, number], limit: number = 30, offset: number = 0): Observable<ErgastResponse<StandingsMRData>> {
        return this.http.get<ErgastResponse<StandingsMRData>>(ErgastService.endpoint(`driverstandings/1`),
            {
                params: new HttpParams().set('limit', limit.toString()).set('offset', offset.toString())
            })
            .pipe(map(res => {
                res.MRData.StandingsTable.StandingsLists = res.MRData.StandingsTable.StandingsLists
                    .filter(sl => Number(sl.season) >= yearStart && Number(sl.season) <= yearEnd);

                res.MRData.total = res.MRData.StandingsTable.StandingsLists.length.toString();

                return res;
            }));
    }

    winnersForSeason(season: string, limit: number = 30, offset: number = 0): Observable<ErgastResponse<RaceMRData>> {
        return this.http.get<ErgastResponse<RaceMRData>>(ErgastService.endpoint(`${season}/results/1`),
            {
                params: new HttpParams().set('limit', limit.toString()).set('offset', offset.toString())
            });
    }
}

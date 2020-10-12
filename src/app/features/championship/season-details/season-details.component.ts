import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../shared/components/base/base.component';
import {ErgastService} from '../services/ergast.service';
import {ActivatedRoute} from '@angular/router';
import {finalize, map, switchMap, takeUntil} from 'rxjs/operators';
import {SeasonDetails} from '../models/season-details.model';
import {forkJoin, Observable} from 'rxjs';
import {ErgastResponse} from '../models/ergast/ergast-response.model';
import {RaceMRData} from '../models/ergast/race-mrdata.model';
import {StandingsMRData} from '../models/ergast/standings-mrdata.model';
import {ErgastConverterService} from '../services/ergast-converter.service';

@Component({
    selector: 'f1-season-details',
    templateUrl: './season-details.component.html',
    styleUrls: ['./season-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonDetailsComponent extends BaseComponent implements OnInit {
    details: SeasonDetails[] = null;
    columns: string[] = ['season', 'race', 'driver', 'constr', 'points', 'status', 'time'];

    get hasResults(): boolean {
        return this.details === null || this.details.length > 0;
    }

    constructor(private ergast: ErgastService,
                private converter: ErgastConverterService,
                private route: ActivatedRoute,
                private ref: ChangeDetectorRef) {
        super();
    }

    ngOnInit(): void {
        this.startLoading();

        this.route.params
            .pipe(
                map(p => p['season']),
                switchMap(this.dataLoad),
                takeUntil(this.unsubscribe)
            )
            .subscribe(this.updateData, this.updateOnError);
    }

    updateData = (details: SeasonDetails[]) => {
        this.details = [...details];
        this.ref.markForCheck();
    };

    updateOnError = () => {
        this.details = [];
    };

    dataLoad = (s: string): Observable<SeasonDetails[]> => {
        return forkJoin([
            this.ergast.winnersForSeason(s, 100),
            this.ergast.seasonChampion(s)
        ]).pipe(
            map(([details, champ]: [ErgastResponse<RaceMRData>, ErgastResponse<StandingsMRData>]) => this.converter.racesToSeasonDetails(details, champ)),
            finalize(this.stopLoading)
        );
    };
}

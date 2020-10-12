import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Season} from '../models/season.model';
import {ErgastService} from '../services/ergast.service';
import {BaseComponent} from '../../../shared/components/base/base.component';
import {finalize, map, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErgastConverterService} from '../services/ergast-converter.service';

@Component({
    selector: 'f1-season-list',
    templateUrl: './season-list.component.html',
    styleUrls: ['./season-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonListComponent extends BaseComponent {
    seasons: Season[] = [];

    constructor(private ergast: ErgastService,
                private converter: ErgastConverterService,
                private router: Router,
                private ref: ChangeDetectorRef) {
        super();

        this.init();
    }

    init(): void {
        this.startLoading();

        this.ergast.champions([2005, 2015], 100)
            .pipe(
                map(res => this.converter.standingsToSeasons(res)),
                finalize(this.stopLoading),
                takeUntil(this.unsubscribe)
            )
            .subscribe(this.updateData);
    }

    updateData = (seasons: Season[]) => {
        this.seasons = [...seasons];
        this.ref.markForCheck();
    }

    selectSeason($event: Season): void {
        this.router.navigate(['f1', 'seasons', $event.season]);
    }
}

import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Season} from '../models/season.model';
import {BaseComponent} from '../../../shared/components/base/base.component';

@Component({
    selector: 'f1-season',
    templateUrl: './season.component.html',
    styleUrls: ['./season.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonComponent extends BaseComponent {
    @Input() season: Season;

    constructor() {
        super();
    }
}

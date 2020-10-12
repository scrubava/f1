import {NgModule} from '@angular/core';

import {ChampionshipRoutingModule} from './championship-routing.module';
import {SeasonListComponent} from './season-list/season-list.component';
import {SeasonComponent} from './season/season.component';
import {SharedModule} from '../../shared/shared.module';
import {ErgastService} from './services/ergast.service';
import {SeasonDetailsComponent} from './season-details/season-details.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {ErgastConverterService} from './services/ergast-converter.service';


@NgModule({
    declarations: [
        SeasonListComponent,
        SeasonComponent,
        SeasonDetailsComponent
    ],
    imports: [
        SharedModule,
        ChampionshipRoutingModule,
        MatTableModule,
        CdkTableModule,
        MatIconModule
    ],
    providers: [
        ErgastService,
        ErgastConverterService
    ]
})
export class ChampionshipModule {
}

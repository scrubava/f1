import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {ChampionshipModule} from './championship/championship.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        ChampionshipModule
    ]
})
export class FeaturesModule {
}

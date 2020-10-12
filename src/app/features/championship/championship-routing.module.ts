import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeasonListComponent} from './season-list/season-list.component';
import {SeasonDetailsComponent} from './season-details/season-details.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'seasons'
    },
    {
        path: 'seasons',
        children: [
            {
                path: '',
                component: SeasonListComponent
            },
            {
                path: ':season',
                component: SeasonDetailsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChampionshipRoutingModule {
}

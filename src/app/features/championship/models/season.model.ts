import {Driver} from './ergast/driver.model';
import {StandingsList} from './ergast/standings-list.model';
import {DriverStanding} from './ergast/driver-standing.model';

export class Season {
    season: string;
    driver: Driver;

    public constructor(init?: Partial<Season>) {
        if (!!init) {
            Object.getOwnPropertyNames(init).forEach(p => {
                this[p] = init[p];
            });
        }
    }

    static fromStandingList(list: StandingsList, standing: DriverStanding): Season {
        if (!standing) {
            return null;
        } else {
            return new Season({
                season: list.season,
                driver: standing.Driver
            });
        }
    }
}

import {Race} from './ergast/race.model';
import {RaceResult} from './ergast/race-result.model';
import {Driver} from './ergast/driver.model';

export class SeasonDetails {
    season: string;
    race: string;
    driver: string;
    constr: string;
    points: number;
    status: string;
    position: number;
    time: string;
    seasonChampion: boolean;

    public constructor(init?: Partial<SeasonDetails>) {
        if (!!init) {
            Object.getOwnPropertyNames(init).forEach(p => {
                this[p] = init[p];
            });
        }
    }

    static fromRace(race: Race, result: RaceResult, seasonChamp: Driver): SeasonDetails {
        if (!result) {
            return null;
        } else {
            return new SeasonDetails({
                season: race.season,
                race: race.raceName,
                driver: `${result.Driver.givenName} ${result.Driver.familyName}`,
                constr: result.Constructor.name,
                time: result.Time.time,
                points: Number(result.points),
                status: result.status,
                position: Number(result.position),
                seasonChampion: seasonChamp ? result.Driver.driverId === seasonChamp.driverId:false
            });
        }
    }
}

import {Injectable} from '@angular/core';
import {Season} from '../models/season.model';
import {ErgastResponse} from '../models/ergast/ergast-response.model';
import {StandingsMRData} from '../models/ergast/standings-mrdata.model';
import {StandingsList} from '../models/ergast/standings-list.model';
import {SeasonDetails} from '../models/season-details.model';
import {RaceMRData} from '../models/ergast/race-mrdata.model';
import {Driver} from '../models/ergast/driver.model';
import {Race} from '../models/ergast/race.model';

@Injectable()
export class ErgastConverterService {
    standingListToSeason = (sl: StandingsList): Season => {
        return Season.fromStandingList(sl, sl.DriverStandings.find(ds => ds.position === '1'));
    };

    raceToDetail = (race: Race, seasonChampion: Driver): SeasonDetails => {
        return SeasonDetails.fromRace(race, race.Results.find(r => r.position === '1'), seasonChampion);
    };

    standingsToSeasons(standings: ErgastResponse<StandingsMRData>): Season[] {
        return standings.MRData.StandingsTable.StandingsLists
            .map(this.standingListToSeason)
            .filter(s => s !== null);
    }

    racesToSeasonDetails(races: ErgastResponse<RaceMRData>, champion: ErgastResponse<StandingsMRData>): SeasonDetails[] {
        let seasonChampion: Driver = null;

        if (champion.MRData.StandingsTable.StandingsLists.length > 0) {
            seasonChampion = champion.MRData.StandingsTable.StandingsLists[0]?.DriverStandings[0]?.Driver;
        }

        return races.MRData.RaceTable.Races
            .map(race => this.raceToDetail(race, seasonChampion))
            .filter(sd => sd !== null);
    }
}

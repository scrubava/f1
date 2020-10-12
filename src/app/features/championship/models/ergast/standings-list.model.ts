import {DriverStanding} from './driver-standing.model';

export interface StandingsList {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

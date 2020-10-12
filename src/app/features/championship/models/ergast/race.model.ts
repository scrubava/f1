import {Circuit} from './circuit.model';
import {RaceResult} from './race-result.model';

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    Results: RaceResult[];
}

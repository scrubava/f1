import {StandingsTable} from './standings-table.model';
import {MRData} from './mrdata.model';

export interface StandingsMRData extends MRData {
    StandingsTable: StandingsTable;
}

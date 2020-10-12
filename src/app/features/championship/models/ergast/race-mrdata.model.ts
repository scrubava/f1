import {MRData} from './mrdata.model';
import {RaceTable} from './race-table.model';

export interface RaceMRData extends MRData {
    RaceTable: RaceTable;
}

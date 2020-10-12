import {MRData} from './mrdata.model';

export interface ErgastResponse<T extends MRData> {
    MRData: T;
}

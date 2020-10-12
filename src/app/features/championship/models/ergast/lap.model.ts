import {F1Time} from './f1-time.model';
import {Speed} from './speed.model';

export interface Lap {
    rank: string;
    lap: string;
    Time: F1Time;
    AverageSpeed: Speed;
}

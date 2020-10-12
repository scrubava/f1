import {Driver} from './driver.model';
import {F1Constructor} from './f1-constructor.model';
import {Lap} from './lap.model';
import {F1Time} from './f1-time.model';

export interface RaceResult {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: Driver;
    Constructor: F1Constructor;
    grid: string;
    laps: string;
    status: string;
    Time: F1Time;
    FastestLap: Lap;
}

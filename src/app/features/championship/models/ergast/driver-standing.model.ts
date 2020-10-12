import {Driver} from './driver.model';
import {F1Constructor} from './f1-constructor.model';

export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: F1Constructor[];
}

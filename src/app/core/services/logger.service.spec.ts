import {TestBed} from '@angular/core/testing';

import {LoggerService} from './logger.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Injectable} from '@angular/core';

describe('LoggerService', () => {
    let service: LoggerService;
    let snackBarSpyService: jasmine.SpyObj<MatSnackBar>;

    beforeEach(() => {
        const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: LoggerService,
                    useClass: LoggerServiceMock
                },
                {
                    provide: MatSnackBar,
                    useValue: snackBarSpy
                }
            ]
        });

        service = TestBed.inject(LoggerService);
        snackBarSpyService = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should show error', () => {
        service.showMessage('error');

        expect(snackBarSpyService.open).toHaveBeenCalled();
    });
});

@Injectable()
export class LoggerServiceMock {
    constructor(private snackBar: MatSnackBar) {
    }

    showMessage(message): void {
        this.snackBar.open(message);
    }
}

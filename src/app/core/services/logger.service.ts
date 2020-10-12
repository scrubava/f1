import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse, HttpRequest} from '@angular/common/http';

// Just a basic service to show error in a snackbar and output to console.
// Ideally should provide a token and abstract implementation,
// so that it can be replaced on feature/component level
@Injectable()
export class LoggerService {

    constructor(private snackBar: MatSnackBar) {
    }

    showMessage(message): void {
        this.snackBar.open(message, 'Close', {
            verticalPosition: 'top',
            duration: 3000
        });
    }

    logError(message: string, error: Error): void {
        console.error('Unhandled exception:', error);

        this.showMessage(message);
    }

    logHttpError(request: HttpRequest<any>, errorResponse: HttpErrorResponse): void {
        console.error('Http Request failed');
        console.error('Request: ', request);
        console.error('Response: ', errorResponse);

        let message = 'A server side error has occurred';

        switch (errorResponse.status) {
            case 500:
                if (typeof errorResponse.error === 'string') {
                    message = errorResponse.error;
                }
                break;

            case 200:
                message = 'Access Forbidden';
                break;
        }

        this.showMessage(message);
    }

}

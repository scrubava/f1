import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    template: ''
})
export class BaseComponent implements OnDestroy {
    protected unsubscribe = new Subject();

    loading = false;

    constructor() {
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    startLoading = () => {
        this.loading = true;
    }

    stopLoading = () => {
        this.loading = false;
    }
}

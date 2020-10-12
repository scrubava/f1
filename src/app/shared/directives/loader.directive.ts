import {ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef} from '@angular/core';
import {LoaderComponent} from '../components/loader/loader.component';

@Directive({
    selector: '[f1Loader]',
})
export class LoaderDirective {
    private loader: ComponentRef<LoaderComponent>;
    private loading: boolean;

    get f1Loader(): boolean {
        return this.loading;
    }

    @Input()
    set f1Loader(loading: boolean) {
        if (loading !== this.loading) {
            if (loading) {
                this.addLoader();
            } else {
                this.removeLoader();
            }

            this.loading = loading;
        }
    }

    constructor(private target: ViewContainerRef,
                private factoryResolver: ComponentFactoryResolver) {
    }

    addLoader(): void {
        const factory = this.factoryResolver.resolveComponentFactory(LoaderComponent);

        this.loader = this.target.createComponent<LoaderComponent>(factory);
        this.loader.instance.loading = true;
    }

    removeLoader(): void {
        if (!!this.loader) {
            this.loader.destroy();
        }
    }
}

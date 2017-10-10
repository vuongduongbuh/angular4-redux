import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.html'
})

export class AppLoader {
    constructor() { 
        document.body.classList.add("body--block-scroll"); 
    }

    ngOnDestroy() {
        document.body.classList.remove("body--block-scroll");
    }
}

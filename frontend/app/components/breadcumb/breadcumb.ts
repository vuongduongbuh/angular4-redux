import { Component, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcumb',
  templateUrl: './breadcumb.html',
  styleUrls: ['./breadcumb.less']
})
export class LtBreadCumbComponent {
    @Input("categories")
    categories: any;
    constructor() {
        
    }
}

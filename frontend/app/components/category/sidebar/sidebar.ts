import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lt-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.less']
})
export class LtSidebarComponent {
  @Input("categories")
  categories: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
}

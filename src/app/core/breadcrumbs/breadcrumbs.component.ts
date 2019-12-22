import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  public breadcrumbs = '';
  public urlChunks: string[] = [];

  setBreadcrumbs() {
    this.activeRoute.snapshot.url.map(item => {
      this.urlChunks.push(item.path);
    });
    for (const path of this.urlChunks) {
      this.breadcrumbs += path + '/';
    }
    this.breadcrumbs = this.breadcrumbs.slice(0, -1);
  }

  ngOnInit() {
    this.setBreadcrumbs();
  }
}

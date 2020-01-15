import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}


@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent implements OnInit {

  breadcrumbs: IBreadcrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = [];
  }



  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      console.log(this.breadcrumbs);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[]= []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    // get the child routes
    const children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {


      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to URL
      url += `/${routeURL}`;

      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };
      if(breadcrumbs.length === 0){
        breadcrumbs.push(breadcrumb);
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      if (breadcrumbs[(breadcrumbs.length) - 1].label !== breadcrumb.label) {
        breadcrumbs.push(breadcrumb);
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    // we should never get here, but just in case
    return breadcrumbs;
  }



}

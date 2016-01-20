import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {LocationStrategy} from "angular2/router";
import {HashLocationStrategy} from "angular2/router";
import {provide} from "angular2/core";
import {HomeComponent} from "./HomeComponent";
import {ProductDetailComponent} from "./ProductDetailComponent";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'my-app',
    template:  `<a [routerLink]="['Home']">Home</a>
               <a [routerLink]="['ProductDetail']">Product Details</a>
               <router-outlet></router-outlet>`,
     directives: [ROUTER_DIRECTIVES] })
@RouteConfig([
    {path: '/',        component: HomeComponent,          name: 'Home'},
    {path: '/product', component: ProductDetailComponent, name: 'ProductDetail'  }
])
export class RouteComponent {}

bootstrap(RouteComponent, [ROUTER_PROVIDERS]);

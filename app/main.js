System.register(["angular2/core", "angular2/router", "./HomeComponent", "./ProductDetailComponent", "angular2/platform/browser"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, router_3, HomeComponent_1, ProductDetailComponent_1, browser_1;
    var RouteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (ProductDetailComponent_1_1) {
                ProductDetailComponent_1 = ProductDetailComponent_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            RouteComponent = (function () {
                function RouteComponent() {
                }
                RouteComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<a [routerLink]=\"['Home']\">Home</a>\n               <a [routerLink]=\"['ProductDetail']\">Product Details</a>\n               <router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES] }),
                    router_2.RouteConfig([
                        { path: '/', component: HomeComponent_1.HomeComponent, name: 'Home' },
                        { path: '/product', component: ProductDetailComponent_1.ProductDetailComponent, name: 'ProductDetail' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RouteComponent);
                return RouteComponent;
            })();
            exports_1("RouteComponent", RouteComponent);
            browser_1.bootstrap(RouteComponent, [router_3.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map
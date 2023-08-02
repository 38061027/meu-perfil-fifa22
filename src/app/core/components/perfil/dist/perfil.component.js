"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerfilComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(fifaService, route) {
        var _this = this;
        this.fifaService = fifaService;
        this.route = route;
        this.isArtilhariasRoute = false;
        this.resultsArray = [];
        this.route.events
            .pipe(rxjs_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.isArtilhariasRoute = event.url.includes('/artilharias') || event.url.includes('/clubes');
            }
        });
    }
    PerfilComponent.prototype.getResults = function () {
        var _this = this;
        return this.fifaService.getResults().subscribe(function (res) {
            _this.resultsArray = res.results;
        });
    };
    PerfilComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    __decorate([
        core_1.Output()
    ], PerfilComponent.prototype, "resultsArray");
    PerfilComponent = __decorate([
        core_1.Component({
            selector: 'app-perfil',
            templateUrl: './perfil.component.html',
            styleUrls: ['./perfil.component.scss']
        })
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var artilharias_component_1 = require("./core/components/artilharias/artilharias.component");
var clubes_component_1 = require("./core/components/clubes/clubes.component");
var estatisticas_component_1 = require("./core/components/estatisticas/estatisticas.component");
var routes = [
    {
        path: 'titulos',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./core/components/titulos/titulos.module'); }).then(function (m) { return m.TitulosModule; });
        }
    },
    { path: 'artilharias', component: artilharias_component_1.ArtilhariasComponent },
    { path: 'clubes', component: clubes_component_1.ClubesComponent },
    { path: 'estatisticas', component: estatisticas_component_1.EstatisticasComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

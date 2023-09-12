"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TitulosComponent = void 0;
var core_1 = require("@angular/core");
var TitulosComponent = /** @class */ (function () {
    function TitulosComponent(fifaService) {
        this.fifaService = fifaService;
        this.panelOpenState = false;
        this.taca = [];
    }
    TitulosComponent.prototype.ngOnInit = function () {
        this.getTitulos();
    };
    TitulosComponent.prototype.getTitulos = function () {
        var _this = this;
        return this.fifaService.getResults().subscribe(function (res) {
            _this.taca = res.results;
        });
    };
    TitulosComponent.prototype.ordenarTitulosMaiorParaMenor = function () {
        var _a;
        (_a = this.taca[0]) === null || _a === void 0 ? void 0 : _a.titulos.sort(function (a, b) {
            return b.temporadas.length - a.temporadas.length;
        });
    };
    TitulosComponent.prototype.ordenarTitulosMenorParaMaior = function () {
        var _a;
        (_a = this.taca[0]) === null || _a === void 0 ? void 0 : _a.titulos.sort(function (a, b) {
            return a.temporadas.length - b.temporadas.length;
        });
    };
    TitulosComponent = __decorate([
        core_1.Component({
            selector: 'app-titulos',
            templateUrl: './titulos.component.html',
            styleUrls: ['./titulos.component.scss']
        })
    ], TitulosComponent);
    return TitulosComponent;
}());
exports.TitulosComponent = TitulosComponent;

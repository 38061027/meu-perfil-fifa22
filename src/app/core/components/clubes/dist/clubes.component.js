"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClubesComponent = void 0;
var core_1 = require("@angular/core");
var ClubesComponent = /** @class */ (function () {
    function ClubesComponent(fifaService) {
        this.fifaService = fifaService;
        this.transferTeams = [];
        this.displayedColumns = ['temporada', 'origem', 'destino', 'valor'];
    }
    ClubesComponent.prototype.getTransfer = function () {
        var _this = this;
        this.fifaService.getResults().subscribe(function (res) {
            console.log(res.results);
            _this.transferTeams = res.results;
        });
    };
    ClubesComponent.prototype.ngOnInit = function () {
        this.getTransfer();
    };
    ClubesComponent = __decorate([
        core_1.Component({
            selector: 'app-clubes',
            templateUrl: './clubes.component.html',
            styleUrls: ['./clubes.component.scss']
        })
    ], ClubesComponent);
    return ClubesComponent;
}());
exports.ClubesComponent = ClubesComponent;

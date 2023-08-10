"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var badge_1 = require("@angular/material/badge");
var expansion_1 = require("@angular/material/expansion");
var table_1 = require("@angular/material/table");
var MODULES = [
    card_1.MatCardModule,
    icon_1.MatIconModule,
    badge_1.MatBadgeModule,
    expansion_1.MatExpansionModule,
    table_1.MatTableModule,
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [common_1.CommonModule, MODULES],
            exports: [MODULES]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;

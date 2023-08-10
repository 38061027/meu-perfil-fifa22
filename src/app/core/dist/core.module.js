"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var errors_interceptor_1 = require("../interceptors/errors.interceptor");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var artilharias_component_1 = require("./components/artilharias/artilharias.component");
var perfil_component_1 = require("./components/perfil/perfil.component");
var toolbar_component_1 = require("./components/toolbar/toolbar.component");
var titulos_component_1 = require("./components/titulos/titulos.component");
var router_1 = require("@angular/router");
var clubes_component_1 = require("./components/clubes/clubes.component");
var material_module_1 = require("./material/material.module");
var http_1 = require("@angular/common/http");
var COMPONENTS = [
    artilharias_component_1.ArtilhariasComponent,
    perfil_component_1.PerfilComponent,
    toolbar_component_1.ToolbarComponent,
    titulos_component_1.TitulosComponent,
    clubes_component_1.ClubesComponent
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [COMPONENTS],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                material_module_1.MaterialModule,
            ],
            exports: [COMPONENTS],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: errors_interceptor_1.ErrorsInterceptor, multi: true },
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;

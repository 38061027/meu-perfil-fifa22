"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var perfil_component_1 = require("./perfil.component");
var testing_2 = require("@angular/router/testing");
var testing_3 = require("@angular/common/http/testing");
var toolbar_component_1 = require("../toolbar/toolbar.component");
var fifa_service_1 = require("../../services/fifa.service");
var rxjs_1 = require("rxjs");
var artilharias_component_1 = require("../artilharias/artilharias.component");
var router_1 = require("@angular/router");
var clubes_component_1 = require("../clubes/clubes.component");
describe('EstatisticasComponent', function () {
    var component;
    var fixture;
    var fifaService;
    var router;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        imports: [
                            testing_2.RouterTestingModule,
                            testing_3.HttpClientTestingModule,
                            testing_2.RouterTestingModule.withRoutes([
                                { path: 'test', component: artilharias_component_1.ArtilhariasComponent },
                                { path: 'clubes', component: clubes_component_1.ClubesComponent },
                            ]),
                        ],
                        declarations: [perfil_component_1.PerfilComponent, toolbar_component_1.ToolbarComponent],
                        providers: [fifa_service_1.FifaService]
                    }).compileComponents()];
                case 1:
                    _a.sent();
                    fixture = testing_1.TestBed.createComponent(perfil_component_1.PerfilComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                    fifaService = testing_1.TestBed.inject(fifa_service_1.FifaService);
                    router = testing_1.TestBed.inject(router_1.Router);
                    spyOn(fifaService, 'getResults').and.returnValue(rxjs_1.of({ results: ['Resultado 1', 'Resultado 2', 'Resultado 3'] }));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('Deve retonar uma lista de results', function () {
        component.ngOnInit();
        expect(component.resultsArray).toEqual([
            'Resultado 1',
            'Resultado 2',
            'Resultado 3',
        ]);
    });
    it('De testar as rotas ARTILHARIAS E CLUBES', function () {
        spyOn(router, 'navigateByUrl');
        router.navigateByUrl('/artilharias');
        router.navigateByUrl('/clubes');
        expect(router.navigateByUrl).toHaveBeenCalledWith('/artilharias');
        expect(router.navigateByUrl).toHaveBeenCalledWith('/clubes');
    });
});

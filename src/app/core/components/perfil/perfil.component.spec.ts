import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';
import { FifaService } from '../../services/fifa.service';
import { of } from 'rxjs';
import { ArtilhariasComponent } from '../artilharias/artilharias.component';
import { Router } from '@angular/router';
import { ClubesComponent } from '../clubes/clubes.component';



describe('EstatisticasComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let fifaService: FifaService;
let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule ,HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'test', component: ArtilhariasComponent },
          {path: 'clubes', component: ClubesComponent}

        ])],
      declarations: [ PerfilComponent, EstatisticasComponent ],
      providers: [FifaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fifaService = TestBed.inject(FifaService);
    router = TestBed.inject(Router)

    spyOn(fifaService, 'getResults').and.returnValue(of(
      { results: ['Resultado 1', 'Resultado 2', 'Resultado 3'] }
    ))


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deve retonar uma lista de results', ()=>{

    component.ngOnInit()

    expect(component.resultsArray).toEqual(['Resultado 1', 'Resultado 2', 'Resultado 3'])


  })


  it('De testar as rotas ARTILHARIAS E CLUBES', ()=>{
    spyOn(router, 'navigateByUrl');


    router.navigateByUrl('/artilharias')
    router.navigateByUrl('/clubes')

    expect(router.navigateByUrl).toHaveBeenCalledWith('/artilharias');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/clubes');



  })

});

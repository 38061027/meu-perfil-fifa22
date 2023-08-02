import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';
import { FifaService } from '../../services/fifa.service';
import { of } from 'rxjs';


describe('EstatisticasComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let fifaService: FifaService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ PerfilComponent, EstatisticasComponent ],
      providers: [FifaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fifaService = TestBed.inject(FifaService);


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


});

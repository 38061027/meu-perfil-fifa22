import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilComponent } from './core/components/perfil/perfil.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'titulos',
            loadChildren: () =>
              import('./core/components/titulos/titulos.module').then(
                (m) => m.TitulosModule
              ),
          },
        ]),
      ],
      declarations: [AppComponent, PerfilComponent, ToolbarComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Deve testar a rota TITULOS', () => {
    const router: Router = TestBed.inject(Router);

    spyOn(router, 'navigateByUrl');

    router.navigateByUrl('/titulos');

    expect(router.navigateByUrl).toHaveBeenCalledWith('/titulos');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilhariasComponent } from './artilharias.component';

describe('ArtilhariasComponent', () => {
  let component: ArtilhariasComponent;
  let fixture: ComponentFixture<ArtilhariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilhariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilhariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

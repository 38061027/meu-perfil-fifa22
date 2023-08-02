import { TestBed } from '@angular/core/testing';
import { FifaService } from './fifa.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('FifaService', () => {
  let service: FifaService;
  let httpTestingController: HttpTestingController
  let url: string

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FifaService);
    httpTestingController = TestBed.inject(HttpTestingController)
    url = service.baseUrl
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve fazer uma chamada GET ', ()=>{
    service.getResults().subscribe();

    const req = httpTestingController.expectOne(`${url}`)
    req.flush({})
    expect(req.request.method).toBe('GET')
  })
});

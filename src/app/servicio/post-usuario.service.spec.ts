import { TestBed } from '@angular/core/testing';

import { PostUsuarioService } from './post-usuario.service';

describe('PostUsuarioService', () => {
  let service: PostUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

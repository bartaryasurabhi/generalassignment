import { TestBed } from '@angular/core/testing';

import { PokemonspecificdetailsService } from './pokemonspecificdetails.service';

describe('PokemonspecificdetailsService', () => {
  let service: PokemonspecificdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonspecificdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

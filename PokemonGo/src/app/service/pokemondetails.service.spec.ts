import { TestBed } from '@angular/core/testing';

import { PokemondetailsService } from './pokemondetails.service';

describe('PokemondetailsService', () => {
  let service: PokemondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

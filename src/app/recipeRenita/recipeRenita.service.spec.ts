/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeRenitaService } from './recipeRenita.service';

describe('Service: RecipeRenita', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeRenitaService]
    });
  });

  it('should ...', inject([RecipeRenitaService], (service: RecipeRenitaService) => {
    expect(service).toBeTruthy();
  }));
});

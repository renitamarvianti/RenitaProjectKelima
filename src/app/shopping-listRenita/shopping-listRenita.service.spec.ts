/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListRenitaService } from './shopping-listRenita.service';

describe('Service: ShoppingListRenita', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListRenitaService]
    });
  });

  it('should ...', inject([ShoppingListRenitaService], (service: ShoppingListRenitaService) => {
    expect(service).toBeTruthy();
  }));
});

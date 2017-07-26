import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFavouritesComponent } from './show-all-favourites.component';

describe('ShowAllFavouritesComponent', () => {
  let component: ShowAllFavouritesComponent;
  let fixture: ComponentFixture<ShowAllFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

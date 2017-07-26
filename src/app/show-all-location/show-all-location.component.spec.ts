import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllLocationComponent } from './show-all-location.component';

describe('ShowAllLocationComponent', () => {
  let component: ShowAllLocationComponent;
  let fixture: ComponentFixture<ShowAllLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

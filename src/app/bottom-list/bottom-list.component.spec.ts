import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomListComponent } from './bottom-list.component';

describe('BottomListComponent', () => {
  let component: BottomListComponent;
  let fixture: ComponentFixture<BottomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

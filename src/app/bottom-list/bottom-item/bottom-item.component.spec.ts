import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomItemComponent } from './bottom-item.component';

describe('BottomItemComponent', () => {
  let component: BottomItemComponent;
  let fixture: ComponentFixture<BottomItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

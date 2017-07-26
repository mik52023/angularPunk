import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YTComponent } from './yt.component';

describe('YTComponent', () => {
  let component: YTComponent;
  let fixture: ComponentFixture<YTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

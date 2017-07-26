import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLastUploadsAsideComponent } from './show-last-uploads-aside.component';

describe('ShowLastUploadsAsideComponent', () => {
  let component: ShowLastUploadsAsideComponent;
  let fixture: ComponentFixture<ShowLastUploadsAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLastUploadsAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLastUploadsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

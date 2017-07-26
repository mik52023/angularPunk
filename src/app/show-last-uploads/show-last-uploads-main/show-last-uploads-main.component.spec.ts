import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLastUploadsMainComponent } from './show-last-uploads-main.component';

describe('ShowLastUploadsMainComponent', () => {
  let component: ShowLastUploadsMainComponent;
  let fixture: ComponentFixture<ShowLastUploadsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLastUploadsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLastUploadsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

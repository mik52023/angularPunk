import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLastUploadsComponent } from './show-last-uploads.component';

describe('ShowLastUploadsComponent', () => {
  let component: ShowLastUploadsComponent;
  let fixture: ComponentFixture<ShowLastUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLastUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLastUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

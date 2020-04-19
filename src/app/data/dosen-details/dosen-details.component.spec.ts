import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenDetailsComponent } from './dosen-details.component';

describe('DosenDetailsComponent', () => {
  let component: DosenDetailsComponent;
  let fixture: ComponentFixture<DosenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

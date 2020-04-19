import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomePageComponent } from './some-page.component';

describe('SomePageComponentt', () => {
  let component: SomePageComponent;
  let fixture: ComponentFixture<SomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

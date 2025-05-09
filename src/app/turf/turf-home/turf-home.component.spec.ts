import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfHomeComponent } from './turf-home.component';

describe('TurfHomeComponent', () => {
  let component: TurfHomeComponent;
  let fixture: ComponentFixture<TurfHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurfHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

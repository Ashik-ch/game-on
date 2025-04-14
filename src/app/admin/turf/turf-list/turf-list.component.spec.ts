import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfListComponent } from './turf-list.component';

describe('TurfListComponent', () => {
  let component: TurfListComponent;
  let fixture: ComponentFixture<TurfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurfListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

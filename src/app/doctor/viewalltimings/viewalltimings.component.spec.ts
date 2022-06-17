import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltimingsComponent } from './viewalltimings.component';

describe('ViewalltimingsComponent', () => {
  let component: ViewalltimingsComponent;
  let fixture: ComponentFixture<ViewalltimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalltimingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalltimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottimingsComponent } from './slottimings.component';

describe('SlottimingsComponent', () => {
  let component: SlottimingsComponent;
  let fixture: ComponentFixture<SlottimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottimingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilagueComponent } from './dilague.component';

describe('DilagueComponent', () => {
  let component: DilagueComponent;
  let fixture: ComponentFixture<DilagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DilagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

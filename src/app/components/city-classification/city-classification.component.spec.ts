import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityClassificationComponent } from './city-classification.component';

describe('CityClassificationComponent', () => {
  let component: CityClassificationComponent;
  let fixture: ComponentFixture<CityClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

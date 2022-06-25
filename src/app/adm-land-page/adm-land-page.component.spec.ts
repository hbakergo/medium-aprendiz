import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLandPageComponent } from './adm-land-page.component';

describe('AdmLandPageComponent', () => {
  let component: AdmLandPageComponent;
  let fixture: ComponentFixture<AdmLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

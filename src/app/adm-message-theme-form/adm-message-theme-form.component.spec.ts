import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageThemeFormComponent } from './adm-message-theme-form.component';

describe('AdmMessageThemeFormComponent', () => {
  let component: AdmMessageThemeFormComponent;
  let fixture: ComponentFixture<AdmMessageThemeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageThemeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageThemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

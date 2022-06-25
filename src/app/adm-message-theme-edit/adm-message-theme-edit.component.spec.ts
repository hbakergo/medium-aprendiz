import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageThemeEditComponent } from './adm-message-theme-edit.component';

describe('AdmMessageThemeEditComponent', () => {
  let component: AdmMessageThemeEditComponent;
  let fixture: ComponentFixture<AdmMessageThemeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageThemeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageThemeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

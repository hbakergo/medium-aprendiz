import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageThemeComponent } from './adm-message-theme.component';

describe('AdmMessageThemeComponent', () => {
  let component: AdmMessageThemeComponent;
  let fixture: ComponentFixture<AdmMessageThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

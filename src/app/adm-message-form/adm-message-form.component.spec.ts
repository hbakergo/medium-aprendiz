import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageFormComponent } from './adm-message-form.component';

describe('AdmMessageFormComponent', () => {
  let component: AdmMessageFormComponent;
  let fixture: ComponentFixture<AdmMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

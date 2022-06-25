import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageEditComponent } from './adm-message-edit.component';

describe('AdmMessageEditComponent', () => {
  let component: AdmMessageEditComponent;
  let fixture: ComponentFixture<AdmMessageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

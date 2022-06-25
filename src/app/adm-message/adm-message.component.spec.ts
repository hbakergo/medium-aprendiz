import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageComponent } from './adm-message.component';

describe('AdmMessageComponent', () => {
  let component: AdmMessageComponent;
  let fixture: ComponentFixture<AdmMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

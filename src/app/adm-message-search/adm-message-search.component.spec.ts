import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMessageSearchComponent } from './adm-message-search.component';

describe('AdmMessageSearchComponent', () => {
  let component: AdmMessageSearchComponent;
  let fixture: ComponentFixture<AdmMessageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMessageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMessageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

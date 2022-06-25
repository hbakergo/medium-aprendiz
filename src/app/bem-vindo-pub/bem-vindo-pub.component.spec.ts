import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindoPubComponent } from './bem-vindo-pub.component';

describe('BemVindoPubComponent', () => {
  let component: BemVindoPubComponent;
  let fixture: ComponentFixture<BemVindoPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemVindoPubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemVindoPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

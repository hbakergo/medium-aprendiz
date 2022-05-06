import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindoAdmComponent } from './bem-vindo-adm.component';

describe('BemVindoAdmComponent', () => {
  let component: BemVindoAdmComponent;
  let fixture: ComponentFixture<BemVindoAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemVindoAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemVindoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

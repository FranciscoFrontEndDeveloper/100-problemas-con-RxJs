import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problemas1a10Component } from './problemas1a10.component';

describe('Problemas1a10Component', () => {
  let component: Problemas1a10Component;
  let fixture: ComponentFixture<Problemas1a10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Problemas1a10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Problemas1a10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

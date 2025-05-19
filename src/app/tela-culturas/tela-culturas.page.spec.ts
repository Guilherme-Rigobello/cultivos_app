import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaCulturasPage } from './tela-culturas.page';

describe('TelaCulturasPage', () => {
  let component: TelaCulturasPage;
  let fixture: ComponentFixture<TelaCulturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCulturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

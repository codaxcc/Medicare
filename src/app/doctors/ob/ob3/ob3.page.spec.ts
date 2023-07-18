import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ob3Page } from './ob3.page';

describe('Ob3Page', () => {
  let component: Ob3Page;
  let fixture: ComponentFixture<Ob3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ob3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

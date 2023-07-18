import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ob1Page } from './ob1.page';

describe('Ob1Page', () => {
  let component: Ob1Page;
  let fixture: ComponentFixture<Ob1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ob1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

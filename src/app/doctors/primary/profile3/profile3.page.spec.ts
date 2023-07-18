import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile3Page } from './profile3.page';

describe('Profile3Page', () => {
  let component: Profile3Page;
  let fixture: ComponentFixture<Profile3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Profile3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

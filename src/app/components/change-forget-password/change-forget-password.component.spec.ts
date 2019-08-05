import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeForgetPasswordComponent } from './change-forget-password.component';

describe('ChangeForgetPasswordComponent', () => {
  let component: ChangeForgetPasswordComponent;
  let fixture: ComponentFixture<ChangeForgetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeForgetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

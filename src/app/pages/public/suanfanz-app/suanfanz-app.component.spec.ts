import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuanfanzAppComponent } from './suanfanz-app.component';

describe('SuanfanzAppComponent', () => {
  let component: SuanfanzAppComponent;
  let fixture: ComponentFixture<SuanfanzAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuanfanzAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuanfanzAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserchildComponent } from './viewuserchild.component';

describe('ViewuserchildComponent', () => {
  let component: ViewuserchildComponent;
  let fixture: ComponentFixture<ViewuserchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

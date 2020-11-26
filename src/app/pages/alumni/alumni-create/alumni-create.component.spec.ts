import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniCreateComponent } from './alumni-create.component';

describe('AlumniCreateComponent', () => {
  let component: AlumniCreateComponent;
  let fixture: ComponentFixture<AlumniCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

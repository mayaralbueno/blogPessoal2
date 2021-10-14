import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaEditComponent } from './tema-edit.component';

describe('TemaEditComponent', () => {
  let component: TemaEditComponent;
  let fixture: ComponentFixture<TemaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaComponent } from './tema.component';

describe('TemaComponent', () => {
  let component: TemaComponent;
  let fixture: ComponentFixture<TemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

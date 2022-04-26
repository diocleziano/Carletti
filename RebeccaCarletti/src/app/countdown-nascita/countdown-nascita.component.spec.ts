import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownNascitaComponent } from './countdown-nascita.component';

describe('CountdownNascitaComponent', () => {
  let component: CountdownNascitaComponent;
  let fixture: ComponentFixture<CountdownNascitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownNascitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownNascitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

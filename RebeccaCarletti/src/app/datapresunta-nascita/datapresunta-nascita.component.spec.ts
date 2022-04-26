import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapresuntaNascitaComponent } from './datapresunta-nascita.component';

describe('DatapresuntaNascitaComponent', () => {
  let component: DatapresuntaNascitaComponent;
  let fixture: ComponentFixture<DatapresuntaNascitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapresuntaNascitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapresuntaNascitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapresuntaNascitaGenitoriComponent } from './datapresunta-nascita-genitori.component';

describe('DatapresuntaNascitaGenitoriComponent', () => {
  let component: DatapresuntaNascitaGenitoriComponent;
  let fixture: ComponentFixture<DatapresuntaNascitaGenitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapresuntaNascitaGenitoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapresuntaNascitaGenitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckDatabaseComponent } from './deck-database.component';

describe('DeckDatabaseComponent', () => {
  let component: DeckDatabaseComponent;
  let fixture: ComponentFixture<DeckDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckDatabaseComponent]
    });
    fixture = TestBed.createComponent(DeckDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

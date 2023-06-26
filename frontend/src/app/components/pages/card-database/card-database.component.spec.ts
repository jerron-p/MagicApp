import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDatabaseComponent } from './card-database.component';

describe('CardDatabaseComponent', () => {
  let component: CardDatabaseComponent;
  let fixture: ComponentFixture<CardDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDatabaseComponent]
    });
    fixture = TestBed.createComponent(CardDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

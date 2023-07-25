import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinAquariumComponent } from './penguin-aquarium.component';

describe('PenguinAquariumComponent', () => {
  let component: PenguinAquariumComponent;
  let fixture: ComponentFixture<PenguinAquariumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinAquariumComponent]
    });
    fixture = TestBed.createComponent(PenguinAquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

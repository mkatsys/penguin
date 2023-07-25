import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinGoodsComponent } from './penguin-goods.component';

describe('PenguinGoodsComponent', () => {
  let component: PenguinGoodsComponent;
  let fixture: ComponentFixture<PenguinGoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenguinGoodsComponent]
    });
    fixture = TestBed.createComponent(PenguinGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

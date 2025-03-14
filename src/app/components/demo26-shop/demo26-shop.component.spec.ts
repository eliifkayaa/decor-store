import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo26ShopComponent } from './demo26-shop.component';

describe('Demo26ShopComponent', () => {
  let component: Demo26ShopComponent;
  let fixture: ComponentFixture<Demo26ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Demo26ShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo26ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

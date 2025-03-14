import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreCartComponent } from './demo-decor-store-cart.component';

describe('DemoDecorStoreCartComponent', () => {
  let component: DemoDecorStoreCartComponent;
  let fixture: ComponentFixture<DemoDecorStoreCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

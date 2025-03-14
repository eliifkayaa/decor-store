import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreCheckoutComponent } from './demo-decor-store-checkout.component';

describe('DemoDecorStoreCheckoutComponent', () => {
  let component: DemoDecorStoreCheckoutComponent;
  let fixture: ComponentFixture<DemoDecorStoreCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

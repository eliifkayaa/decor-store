import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreShopComponent } from './demo-decor-store-shop.component';

describe('DemoDecorStoreShopComponent', () => {
  let component: DemoDecorStoreShopComponent;
  let fixture: ComponentFixture<DemoDecorStoreShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

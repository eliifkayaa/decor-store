import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreWishlistComponent } from './demo-decor-store-wishlist.component';

describe('DemoDecorStoreWishlistComponent', () => {
  let component: DemoDecorStoreWishlistComponent;
  let fixture: ComponentFixture<DemoDecorStoreWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreWishlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

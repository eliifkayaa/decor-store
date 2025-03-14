import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreSingleProductComponent } from './demo-decor-store-single-product.component';

describe('DemoDecorStoreSingleProductComponent', () => {
  let component: DemoDecorStoreSingleProductComponent;
  let fixture: ComponentFixture<DemoDecorStoreSingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreSingleProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

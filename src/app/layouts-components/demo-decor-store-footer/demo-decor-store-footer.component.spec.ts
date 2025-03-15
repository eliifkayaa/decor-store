import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreFooterComponent } from './demo-decor-store-footer.component';

describe('DemoDecorStoreFooterComponent', () => {
  let component: DemoDecorStoreFooterComponent;
  let fixture: ComponentFixture<DemoDecorStoreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

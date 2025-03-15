import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreHeaderComponent } from './demo-decor-store-header.component';

describe('DemoDecorStoreHeaderComponent', () => {
  let component: DemoDecorStoreHeaderComponent;
  let fixture: ComponentFixture<DemoDecorStoreHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

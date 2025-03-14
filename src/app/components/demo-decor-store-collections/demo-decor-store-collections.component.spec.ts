import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreCollectionsComponent } from './demo-decor-store-collections.component';

describe('DemoDecorStoreCollectionsComponent', () => {
  let component: DemoDecorStoreCollectionsComponent;
  let fixture: ComponentFixture<DemoDecorStoreCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

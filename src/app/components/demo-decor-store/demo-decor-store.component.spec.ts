import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreComponent } from './demo-decor-store.component';

describe('DemoDecorStoreComponent', () => {
  let component: DemoDecorStoreComponent;
  let fixture: ComponentFixture<DemoDecorStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

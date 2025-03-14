import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreAccountComponent } from './demo-decor-store-account.component';

describe('DemoDecorStoreAccountComponent', () => {
  let component: DemoDecorStoreAccountComponent;
  let fixture: ComponentFixture<DemoDecorStoreAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

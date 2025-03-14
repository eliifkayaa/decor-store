import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreContactComponent } from './demo-decor-store-contact.component';

describe('DemoDecorStoreContactComponent', () => {
  let component: DemoDecorStoreContactComponent;
  let fixture: ComponentFixture<DemoDecorStoreContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

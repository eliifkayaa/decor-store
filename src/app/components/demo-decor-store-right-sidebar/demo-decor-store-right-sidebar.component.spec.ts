import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreRightSidebarComponent } from './demo-decor-store-right-sidebar.component';

describe('DemoDecorStoreRightSidebarComponent', () => {
  let component: DemoDecorStoreRightSidebarComponent;
  let fixture: ComponentFixture<DemoDecorStoreRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreRightSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

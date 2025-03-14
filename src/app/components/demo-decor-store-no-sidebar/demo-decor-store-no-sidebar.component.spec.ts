import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreNoSidebarComponent } from './demo-decor-store-no-sidebar.component';

describe('DemoDecorStoreNoSidebarComponent', () => {
  let component: DemoDecorStoreNoSidebarComponent;
  let fixture: ComponentFixture<DemoDecorStoreNoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreNoSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreNoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreBlogSingleClassicComponent } from './demo-decor-store-blog-single-classic.component';

describe('DemoDecorStoreBlogSingleClassicComponent', () => {
  let component: DemoDecorStoreBlogSingleClassicComponent;
  let fixture: ComponentFixture<DemoDecorStoreBlogSingleClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreBlogSingleClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreBlogSingleClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

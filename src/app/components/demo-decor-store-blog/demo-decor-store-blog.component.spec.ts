import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreBlogComponent } from './demo-decor-store-blog.component';

describe('DemoDecorStoreBlogComponent', () => {
  let component: DemoDecorStoreBlogComponent;
  let fixture: ComponentFixture<DemoDecorStoreBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

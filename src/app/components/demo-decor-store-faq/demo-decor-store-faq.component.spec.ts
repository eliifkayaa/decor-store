import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreFaqComponent } from './demo-decor-store-faq.component';

describe('DemoDecorStoreFaqComponent', () => {
  let component: DemoDecorStoreFaqComponent;
  let fixture: ComponentFixture<DemoDecorStoreFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

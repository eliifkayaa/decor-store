import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDecorStoreAboutComponent } from './demo-decor-store-about.component';

describe('DemoDecorStoreAboutComponent', () => {
  let component: DemoDecorStoreAboutComponent;
  let fixture: ComponentFixture<DemoDecorStoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDecorStoreAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDecorStoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

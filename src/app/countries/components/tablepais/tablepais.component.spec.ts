import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepaisComponent } from './tablepais.component';

describe('TablepaisComponent', () => {
  let component: TablepaisComponent;
  let fixture: ComponentFixture<TablepaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablepaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablepaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

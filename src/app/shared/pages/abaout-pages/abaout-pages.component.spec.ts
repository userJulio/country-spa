import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaoutPagesComponent } from './abaout-pages.component';

describe('AbaoutPagesComponent', () => {
  let component: AbaoutPagesComponent;
  let fixture: ComponentFixture<AbaoutPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbaoutPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
